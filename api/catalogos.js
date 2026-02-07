const mssql = require('mssql');

const config = {
  server: 'prd-livigui-sql-ws.westus2.cloudapp.azure.com',
  port: 61033,
  user: process.env.AZURE_SQL_USER,
  password: process.env.AZURE_SQL_PASSWORD,
  database: 'LIVIGUI_EMPR0001',
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true
  },
  connectionTimeout: 30000,
  requestTimeout: 30000
};

module.exports = async (req, res) => {
  // CORS headers para permitir peticiones desde cualquier dominio
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    console.log('Conectando a Azure SQL...');
    const pool = await mssql.connect(config);
    
    // Query parametrizable
    const limit = req.query.limit || 10;
    const result = await pool.request()
      .query(`SELECT TOP ${parseInt(limit)} * FROM LOG_Catalogos`);
    
    await pool.close();
    console.log(`✓ Consulta exitosa: ${result.recordset.length} registros`);
    
    res.status(200).json({ 
      success: true,
      count: result.recordset.length,
      data: result.recordset 
    });
    
  } catch (error) {
    console.error('Error en API:', error.message);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: 'Verifica las credenciales en las variables de entorno'
    });
  }
};
