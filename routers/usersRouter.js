const router = require("express").Router();
const Users = require("../users/users-model");
const authenticate = require("../middleware");

router.get("/", authenticate, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
