'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    orderNumber: {
      type: Number
    },
    orderDate: {
      type: String
    },
    requiredDate: {
      type: String
    },
    shippedDate: {
      type: String
    },
    status: {
      type: String
    },
    comments: {
      type: String
    },
    customerNumber: {
      type: Number
    },
    productCode: {
      type: String
    },
    quantityOrdered: {
      type: Number
    },
    priceEach: {
      type: Number
    },
    orderLineNumber: {
      type: Number
    },
    productName: {
      type: String
    },
    productLine: {
      type: String
    },
    productScale: {
      type: String
    },
    productVendor: {
      type: String
    },
    productDescription: {
      type: String
    },
    quantityInStock: {
      type: Number
    },
    buyPrice: {
      type: Number
    },
    MSRP: {
      type: Number
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const log_sales = mongoose.model('log_sales', newSchema);
  return log_sales;
};