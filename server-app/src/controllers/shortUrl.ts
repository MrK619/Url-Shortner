import express from "express";
import { urlModel } from "../model/shortUrl";

export const createUrl = async (
    req: express.Request,
    res: express.Response
) => {
    const { fullUrl } = req.body;
    console.log(fullUrl);
    try {
        const findurl = await urlModel.find({ fullUrl: fullUrl });
        if (findurl.length > 0) {
            res.status(404).send("Url already exists");
        } else {
            const url = await urlModel.create({ fullUrl });
            res.send(url);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getAllUrl = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const urls = await urlModel.find();
        if (urls.length < 0) {
            res.status(404).send("No urls found");
        } else {
            res.status(200).send(urls);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
        if (!shortUrl) {
            res.status(404).send("No url found");
        } else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteUrl = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const shortUrl = await urlModel.findOneAndDelete({
            _id: req.params.id,
        });
        if (!shortUrl) {
            res.status(404).send("No url found");
        } else {
            res.status(200).send("Url deleted successfully");
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
