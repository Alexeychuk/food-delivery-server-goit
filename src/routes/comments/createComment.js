const Comment = require("../../modules/db/schemas/Comment");

const createComment = (request, response) => {
  const comment = request.body;

  const newComment = new Comment(comment);

  const sendResponse = comment => {
    console.log(comment);

    response.json({
      status: "success",
      comment
    });
  };

  const sendError = err => {
    console.log(err);
    response.status(400);
    response.json({
      error: "Comment was not saved"
    });
  };

  newComment
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = createComment;
