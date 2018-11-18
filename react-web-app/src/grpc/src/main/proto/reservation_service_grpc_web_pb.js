/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for reservations.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.reservations = {};
proto.reservations.v1 = require('./reservation_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reservations.v1.ReservationServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reservations.v1.ReservationServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.reservations.v1.ReservationServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.reservations.v1.ReservationServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reservations.v1.CreateReservationRequest,
 *   !proto.reservations.v1.Reservation>}
 */
const methodInfo_ReservationService_CreateReservation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reservations.v1.Reservation,
  /** @param {!proto.reservations.v1.CreateReservationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.reservations.v1.Reservation.deserializeBinary
);


/**
 * @param {!proto.reservations.v1.CreateReservationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reservations.v1.Reservation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reservations.v1.Reservation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reservations.v1.ReservationServiceClient.prototype.createReservation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reservations.v1.ReservationService/CreateReservation',
      request,
      metadata,
      methodInfo_ReservationService_CreateReservation,
      callback);
};


/**
 * @param {!proto.reservations.v1.CreateReservationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reservations.v1.Reservation>}
 *     The XHR Node Readable Stream
 */
proto.reservations.v1.ReservationServicePromiseClient.prototype.createReservation =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createReservation(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reservations.v1.GetReservationRequest,
 *   !proto.reservations.v1.Reservation>}
 */
const methodInfo_ReservationService_GetReservation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reservations.v1.Reservation,
  /** @param {!proto.reservations.v1.GetReservationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.reservations.v1.Reservation.deserializeBinary
);


/**
 * @param {!proto.reservations.v1.GetReservationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reservations.v1.Reservation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reservations.v1.Reservation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reservations.v1.ReservationServiceClient.prototype.getReservation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reservations.v1.ReservationService/GetReservation',
      request,
      metadata,
      methodInfo_ReservationService_GetReservation,
      callback);
};


/**
 * @param {!proto.reservations.v1.GetReservationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reservations.v1.Reservation>}
 *     The XHR Node Readable Stream
 */
proto.reservations.v1.ReservationServicePromiseClient.prototype.getReservation =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getReservation(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reservations.v1.ListReservationsRequest,
 *   !proto.reservations.v1.Reservation>}
 */
const methodInfo_ReservationService_ListReservations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reservations.v1.Reservation,
  /** @param {!proto.reservations.v1.ListReservationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.reservations.v1.Reservation.deserializeBinary
);


/**
 * @param {!proto.reservations.v1.ListReservationsRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.reservations.v1.Reservation>}
 *     The XHR Node Readable Stream
 */
proto.reservations.v1.ReservationServiceClient.prototype.listReservations =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/reservations.v1.ReservationService/ListReservations',
      request,
      metadata,
      methodInfo_ReservationService_ListReservations);
};


/**
 * @param {!proto.reservations.v1.ListReservationsRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.reservations.v1.Reservation>}
 *     The XHR Node Readable Stream
 */
proto.reservations.v1.ReservationServicePromiseClient.prototype.listReservations =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/reservations.v1.ReservationService/ListReservations',
      request,
      metadata,
      methodInfo_ReservationService_ListReservations);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reservations.v1.DeleteReservationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ReservationService_DeleteReservation = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.reservations.v1.DeleteReservationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.reservations.v1.DeleteReservationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reservations.v1.ReservationServiceClient.prototype.deleteReservation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reservations.v1.ReservationService/DeleteReservation',
      request,
      metadata,
      methodInfo_ReservationService_DeleteReservation,
      callback);
};


/**
 * @param {!proto.reservations.v1.DeleteReservationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.reservations.v1.ReservationServicePromiseClient.prototype.deleteReservation =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteReservation(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.reservations.v1;

