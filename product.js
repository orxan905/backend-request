let products=[
    {id:1, name: 'Apple',price:'3700 AZN',amount:'2 eded'},
    {id:2, name: 'LG', price:'2400 AZN', amount:'1 eded' },
    {id:3, name: 'Bosh',price:'3550 AZN',amount:'5 eded'},
    {id:4, name: 'Samsung', price:'2100 AZN', amount:'3 eded'},
    {id:5, name: 'Cola',price:'2.70 AZN',amount:'8 eded'},
    {id:6, name: 'Sprite', price:'2.40 AZN', amount:'6 eded'},
    {id:7, name: 'Magnum',price:'4.60 AZN',amount:'4 eded'},
    {id:8, name: 'Manqalustu', price:'13 AZN', amount:'3 kq'},
    {id:9, name: 'Labne',price:'6.30 AZN',amount:'2 eded'},
    {id:10, name: 'Cola', price:'2.90 AZN', amount:'3 eded'}
]

 const expresss= require('express')
 const app= expresss()

 app.get('/product/:id', function(req,res){
        const idOfProduct = parseInt(req.params.id);
        const product = products.find((product) => product.id === idOfProduct);
        if (!product) {
          res.status(404).send();
        }
        res.status(200).json(product);
      });

      app.get('/product', function (req, res) {
        const count = parseInt(req.query.count);
        const offset = parseInt(req.query.offset);
        res.send({ products: products.slice(offset, offset + count), count: products.length });
      });
      
      app.listen(3000,function(){
        console.log('Server is starting')
      })