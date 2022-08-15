const router = require("express").Router();
const Fav = require("../models/Fav");
const express = require('express')
const app = express();


  router.post("/favorite", async (req, res) => {

    const newFav = new Fav({
        movieName: req.body.movieName,
        movieDesc: req.body.movieDesc,
        movieRelease:req.body.movieRelease,
      });
    
      try {
        const user = await newFav.save();
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    
    
  });

  module.exports = router;


