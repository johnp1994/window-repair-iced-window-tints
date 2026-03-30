/**
 * GET /api/leads
 * Retrieve leads (admin endpoint — auth to be added later).
 * Currently returns empty array — BigQuery query will be wired up later.
 */
export default defineEventHandler(async (_event) => {
  // TODO: Query BigQuery when table names are provided
  // Example:
  // const { BigQuery } = await import('@google-cloud/bigquery')
  // const bigquery = new BigQuery({ projectId: config.bigqueryProjectId })
  // const [rows] = await bigquery.dataset(config.bigqueryDataset).table('leads').getRows()
  // return { success: true, data: rows }

  console.log('📋 Leads requested (BigQuery not connected yet)')

  return {
    success: true,
    data: [],
    message: 'BigQuery not connected yet. Provide table names to enable.',
  }
})
