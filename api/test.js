module.exports = (req, res) => {
  res.status(200).json({ message: "Test funciona!" });
};
```

Commit → Espera el redeploy → Prueba:
```
https://azure-sql-k2hj57co7-livigui-nextsis-projects-03148e0e.vercel.app/api/test
