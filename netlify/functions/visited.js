const { Client } = require("@notionhq/client");

exports.handler = async function () {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "visited",
        checkbox: { equals: true }
      }
    });

    const visitedCountries = response.results
      .map(page => page.properties.slug?.rich_text?.[0]?.plain_text?.toLowerCase())
      .filter(Boolean);

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ visitedCountries })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
