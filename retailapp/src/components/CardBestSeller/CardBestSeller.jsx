import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

const bestSellers = [
  {
    id: 1,
    name: 'Three in One',
    image: '/imgg/three_in_one.jpg',
    price: '₹200',
  },
  {
    id: 2,
    name: ' Tata Chana Dal',
    image: '/imgg/chana_dal.jpg',
    price: '₹125',
  },
  {
    id: 3,
    name: 'Amul Masti',
    image: '/imgg/amulmasti.jpg',
    price: '₹80',
  },
  {
    id: 4,
    name: 'Amul Ghee',
    image: '/imgg/amulghee.jpg',
    price: '₹200',
  },
];

const CardBestSeller = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
      {bestSellers.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            sx={{ height: 200, objectFit: 'cover' }}
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button size="small">View Details</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CardBestSeller;
