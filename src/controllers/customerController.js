const controller = {}

/*controller.list = (req, res) => {
  res.send('Hello World')
}*/

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
      if (err) {
        console.log('Desde el error')
        res.json(err)
      }
      console.log(customers);
      res.render('customers', {
        data: customers
      });  
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    //todo: manejar el erro
    //NodeJs y Mysql crud '56
    // ? ayuda a controlar problemas de inyección
    conn.query('INSERT INTO customer set ?', [data], (err, customer) => { //en lugar de customer se acostumbre colocar rows
      res.redirect('/');
    })
  });
};

controller.edit = (req, res) => {
  const {id} = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => { //customer es un array que dentro tiene el objeto de datos
      res.render('edit', {
        data: customer[0]
      })
    });
  });
}

controller.update = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log(data);
  req.getConnection((err, conn) => {
    conn.query('UPDATE customer SET ?  WHERE id = ?', [data, id], (err, customer) => {
      res.redirect('/');
    })
  });
}

controller.destroy = (req, res) => {
  const {id} = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM customer WHERE id = ?', [id], (err, customer) => {
      res.redirect('/')
    });
  })
};

module.exports = controller;