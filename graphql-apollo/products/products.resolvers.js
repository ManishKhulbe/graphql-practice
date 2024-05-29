const productsModel = require('./products.modal')

module.exports = {
    Query:{
        products:()=>{
           return  productsModel.getAllProducts()
        },
        productByPrice: (_ , args)=>{
            return productsModel.getProductsByPrice(args.min , args.max)
        },
        productById:(_,args)=>{
            return productsModel.productById(args.id)
        }
    },
    Mutation:{
        addNewProduct:(_, args)=>{
            return productsModel.addNewProduct(args.id , args.description , args.price)
        },
        addNewProductReview:(_,args)=>{
            return productsModel.addNewProductReview(args.id , args.rating , args.comment)
        }
    }
}