// api/products/index.js

import Products from '@/app/Backend/Models/products';
import dbConnect from '@/app/Backend/config/dbConnect';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
    // if (req.method === 'POST') {
    //     try {
    //         await dbConnect();
    //         const product = await Products.create(req.body);

    //         res.status(200).json({
    //             message: 'Data created successfully',
    //             product,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({
    //             message: 'Internal Server Error',
    //         });
    //     }
    // } else if (req.method === 'GET') {
    //     try {
    //         await dbConnect();
    //         const products = await Products.find();
    //         res.status(200).json({
    //             message: 'Data fathed successfully',
    //             products,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({
    //             message: 'Internal Server Error',
    //         });
    //     }
    // } else {
    //     res.status(405).json({
    //         message: 'Method Not Allowed',
    //     });
    // }

    try {
        await dbConnect();

        switch (req.method) {
            case 'POST':
                const product = await Products.create(req.body);

                res.status(200).json({
                    message: 'Data created successfully',
                    product,
                });
                break;
            case 'GET':
                // Check if the request has a valid product ID


                const products = await Products.find();
                res.status(200).json({
                    message: 'Data fathed successfully',
                    products,
                });

                break;
            default:
                return res.status(405).json({
                    message: 'Method Not Allowed',
                });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }

}



