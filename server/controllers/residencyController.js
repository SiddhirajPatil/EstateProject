import asyncHandler from 'express-async-handler'
import { prisma } from "../config/prismaConfig.js"

export const createResidency = asyncHandler(async (req, res) => {
    console.log("endpoint created")
    const { title, description, price, address, country, city, facilities, userEmail, image } = req.body.data
    console.log(req.body.data)
    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                country,
                city,
                facilities,
                owner: { connect: { email: userEmail } },
                image
            }
        });
        res.send({ message: "Residency created successfully", residency })

    } catch (err) {
        if (err.code === "P2002") {
            throw new Error("A residency with address already exists")
        }
        throw new Error(err.message);
    }

});

//function gets all the residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
    const residencies = await prisma.residency.findMany({
        orderBy: {
            createdAt: "desc"

        }
    })
    res.send(residencies);
});

// function to get a specific residency

export const getResidency = asyncHandler(async (req, res) => {
    //when we use the url to send some parameters
    const { id } = req.params;

    try {
        const residency = await prisma.residency.findUnique({
            where: { id }

        })
        res.send(residency)

    } catch (err) {
        throw new Error(err.message);
    }
})
