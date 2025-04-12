const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

exports.handler = async function () {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "visited",
        checkbox: { equals: true }
      }
    });

    const visitedCountries = response.results
      .map((page) => {
        const isoProp = page.properties.iso3;
        return isoProp && isoProp.rich_text?.[0]?.plain_text;
      })
      .filter(Boolean); // remove undefined or empty

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ visitedCountries })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
