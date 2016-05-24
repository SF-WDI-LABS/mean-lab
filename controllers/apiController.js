console.log("in api ctrl");
function index(req, res) {
  res.json({
    message: "Welcome to taco!",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

function templates(req, res) {
  console.log("in template", req.params.name);
  var name = req.params.name;
  res.render('templates/' + name);
}

module.exports.index = index;
module.exports.templates = templates;
