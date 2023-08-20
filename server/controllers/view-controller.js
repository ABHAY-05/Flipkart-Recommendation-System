const mongoose = require('mongoose')
const Viewlist = require('../models/viewSchema')

const addItemViewlist = async (req, res) => {
    try {
        const count = await Viewlist.countDocuments({ userId: req.body.userId, productId: req.body.productId });
        if(!count){
            const viewlist = new Viewlist(req.body);
            await viewlist.save();
        } else {
            const result = await Viewlist.findOne({ userId: req.body.userId, productId: req.body.productId }, 'freq');
            let freq = result.freq + 1;
            await Viewlist.updateOne(
                { userId: req.body.userId, productId: req.body.productId},
                { $set: { freq: freq } }
            )
        }
        res.send();
    } catch(error){
        console.log({error: error});
        res.status(204).send();
    }
};

const removeViewlistItem = async (req, res) => {
    try {
        const userId = mongoose.Types.ObjectId(req.body.userId);
        const count = await Viewlist.countDocuments({ userId: userId });

        if (count >= 13) {
            const documentsToDelete = await Viewlist.find({userId: userId}).limit(4);
            for (const doc of documentsToDelete) {
                await Viewlist.deleteOne({ userId: doc.userId });
            }
        }
        res.send();
    } catch (error) {
        console.log({ error: error });
        res.status(204).send();
    }
};


const getViewlistItems = async (req, res) => {
    try {
        const uId = mongoose.Types.ObjectId(req.params.id)
        const items = await Viewlist.aggregate([
            {
                $match: {
                    userId : uId
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "productDetails"
                }
            }
        ]);
        res.json(items);
    } catch(error) {
        console.log(error);
        res.status(500).send();
    }
};

module.exports = { addItemViewlist, getViewlistItems, removeViewlistItem };