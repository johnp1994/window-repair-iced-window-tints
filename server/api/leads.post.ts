/**
 * POST /api/leads
 * Receives lead form submissions.
 * Currently logs to console — BigQuery integration will be wired up later.
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validate required fields
  if (!body.fullName || !body.phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Full name and phone are required.',
    })
  }

  const lead = {
    id: crypto.randomUUID(),
    fullName: body.fullName,
    phone: body.phone,
    message: body.message || '',
    serviceArea: body.serviceArea || '',
    source: body.source || 'website',
    createdAt: new Date().toISOString(),
  }

  // TODO: Insert into BigQuery when table names are provided
  // Example:
  // const { BigQuery } = await import('@google-cloud/bigquery')
  // const bigquery = new BigQuery({ projectId: config.bigqueryProjectId })
  // await bigquery.dataset(config.bigqueryDataset).table('leads').insert([lead])

  console.log('📋 New lead received:', lead)

  return {
    success: true,
    data: { id: lead.id },
  }
})
