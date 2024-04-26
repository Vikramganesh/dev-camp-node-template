const Bootcamp = require("../models/bootcamp.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
/*  1
    @Desc Get all bootcamps
    @Route GET /api/v1/bootcamps
    @Access Public
*/

exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find();
  res
    .status(201)
    .json({ success: true, count: bootcamp.length, data: bootcamp });
});

/*  2
    @Desc Get bootcamp
    @Route GET /api/v1/bootcamps/:id
    @Access Public
*/
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(201).json({ success: true, data: bootcamp });
});

/*  3
    @Desc Create new bootcamp
    @Route POST /api/v1/bootcamps
    @Access Private
*/

exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, msg: "Bootcamp created." });
});

/*  4
    @Desc Update bootcamp
    @Route PUT /api/v1/bootcamps/:id
    @Access Private
*/

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(201).json({ success: true, data: bootcamp });
});

/*  5
    @Desc Delete bootcamp
    @Route DELETE /api/v1/bootcamps/:id
    @Access Private
*/

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(201).json({ success: true, data: {} });
});
