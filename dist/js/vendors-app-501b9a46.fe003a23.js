/*!
 * ERSS SAYING
 * (c) 2020-2023 Xhemj
 * Build: 2023-3-4 11:45:11
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors-app-501b9a46"],{"03c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h}));var i=n("fd63"),a=n("1a6e"),s=n("703e"),r=n("c2bc"),o=n("9644"),c=n("c654"),p=n("fe38"),d=1e3,u=function(t){function e(e,n,i,a){void 0===i&&(i="");var s=t.call(this,a)||this;return s._pushActivity=e,s._popActivity=n,s.transactionSpanId=i,s}return Object(i.b)(e,t),e.prototype.add=function(e){var n=this;e.spanId!==this.transactionSpanId&&(e.finish=function(t){e.endTimestamp="number"==typeof t?t:Object(a.d)(),n._popActivity(e.spanId)},void 0===e.endTimestamp&&this._pushActivity(e.spanId)),t.prototype.add.call(this,e)},e}(c.b),h=function(t){function e(e,n,i,a){void 0===i&&(i=d),void 0===a&&(a=!1);var r=t.call(this,e,n)||this;return r._idleHub=n,r._idleTimeout=i,r._onScope=a,r.activities={},r._heartbeatCounter=0,r._finished=!1,r._beforeFinishCallbacks=[],n&&a&&(l(n),o.a&&s.c.log("Setting idle transaction on scope. Span ID: "+r.spanId),n.configureScope((function(t){return t.setSpan(r)}))),r._initTimeout=setTimeout((function(){r._finished||r.finish()}),r._idleTimeout),r}return Object(i.b)(e,t),e.prototype.finish=function(e){var n,r,c=this;if(void 0===e&&(e=Object(a.d)()),this._finished=!0,this.activities={},this.spanRecorder){o.a&&s.c.log("[Tracing] finishing IdleTransaction",new Date(1e3*e).toISOString(),this.op);try{for(var p=Object(i.f)(this._beforeFinishCallbacks),d=p.next();!d.done;d=p.next()){(0,d.value)(this,e)}}catch(t){n={error:t}}finally{try{d&&!d.done&&(r=p.return)&&r.call(p)}finally{if(n)throw n.error}}this.spanRecorder.spans=this.spanRecorder.spans.filter((function(t){if(t.spanId===c.spanId)return!0;t.endTimestamp||(t.endTimestamp=e,t.setStatus("cancelled"),o.a&&s.c.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(t,void 0,2)));var n=t.startTimestamp<e;return n||o.a&&s.c.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(t,void 0,2)),n})),o.a&&s.c.log("[Tracing] flushing IdleTransaction")}else o.a&&s.c.log("[Tracing] No active IdleTransaction");return this._onScope&&l(this._idleHub),t.prototype.finish.call(this,e)},e.prototype.registerBeforeFinishCallback=function(t){this._beforeFinishCallbacks.push(t)},e.prototype.initSpanRecorder=function(t){var e=this;if(!this.spanRecorder){this.spanRecorder=new u((function(t){e._finished||e._pushActivity(t)}),(function(t){e._finished||e._popActivity(t)}),this.spanId,t),o.a&&s.c.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)},e.prototype._pushActivity=function(t){this._initTimeout&&(clearTimeout(this._initTimeout),this._initTimeout=void 0),o.a&&s.c.log("[Tracing] pushActivity: "+t),this.activities[t]=!0,o.a&&s.c.log("[Tracing] new activities count",Object.keys(this.activities).length)},e.prototype._popActivity=function(t){var e=this;if(this.activities[t]&&(o.a&&s.c.log("[Tracing] popActivity "+t),delete this.activities[t],o.a&&s.c.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){var n=this._idleTimeout,i=Object(a.d)()+n/1e3;setTimeout((function(){e._finished||(e.setTag(r.a,r.b[1]),e.finish(i))}),n)}},e.prototype._beat=function(){if(!this._finished){var t=Object.keys(this.activities).join("");t===this._prevHeartbeatString?this._heartbeatCounter+=1:this._heartbeatCounter=1,this._prevHeartbeatString=t,this._heartbeatCounter>=3?(o.a&&s.c.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this.setTag(r.a,r.b[0]),this.finish()):this._pingHeartbeat()}},e.prototype._pingHeartbeat=function(){var t=this;o.a&&s.c.log("pinging Heartbeat -> current counter: "+this._heartbeatCounter),setTimeout((function(){t._beat()}),5e3)},e}(p.a);function l(t){if(t){var e=t.getScope();if(e)e.getTransaction()&&e.setSpan(void 0)}}},"339f":function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return v}));var i=n("fd63"),a=n("a1aa"),s=n("703e"),r=n("6bb1"),o=n("dc75"),c=n("27d0"),p=n("9644"),d=n("03c5"),u=n("fe38"),h=n("d401");function l(){var t=this.getScope();if(t){var e=t.getSpan();if(e)return{"sentry-trace":e.toTraceparent()}}return{}}function f(t,e,n){return Object(h.b)(e)?void 0!==t.sampled?(t.setMetadata({transactionSampling:{method:"explicitly_set"}}),t):("function"==typeof e.tracesSampler?(i=e.tracesSampler(n),t.setMetadata({transactionSampling:{method:"client_sampler",rate:Number(i)}})):void 0!==n.parentSampled?(i=n.parentSampled,t.setMetadata({transactionSampling:{method:"inheritance"}})):(i=e.tracesSampleRate,t.setMetadata({transactionSampling:{method:"client_rate",rate:Number(i)}})),function(t){if(Object(r.h)(t)||"number"!=typeof t&&"boolean"!=typeof t)return p.a&&s.c.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got "+JSON.stringify(t)+" of type "+JSON.stringify(typeof t)+"."),!1;if(t<0||t>1)return p.a&&s.c.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got "+t+"."),!1;return!0}(i)?i?(t.sampled=Math.random()<i,t.sampled?(p.a&&s.c.log("[Tracing] starting "+t.op+" transaction - "+t.name),t):(p.a&&s.c.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = "+Number(i)+")"),t)):(p.a&&s.c.log("[Tracing] Discarding transaction because "+("function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):(p.a&&s.c.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)):(t.sampled=!1,t);var i}function m(t,e){var n=this.getClient(),a=n&&n.getOptions()||{},s=new u.a(t,this);return(s=f(s,a,Object(i.a)({parentSampled:t.parentSampled,transactionContext:t},e))).sampled&&s.initSpanRecorder(a._experiments&&a._experiments.maxSpans),s}function g(t,e,n,a,s){var r=t.getClient(),o=r&&r.getOptions()||{},c=new d.b(e,t,n,a);return(c=f(c,o,Object(i.a)({parentSampled:e.parentSampled,transactionContext:e},s))).sampled&&c.initSpanRecorder(o._experiments&&o._experiments.maxSpans),c}function v(){var e;(e=Object(a.c)()).__SENTRY__&&(e.__SENTRY__.extensions=e.__SENTRY__.extensions||{},e.__SENTRY__.extensions.startTransaction||(e.__SENTRY__.extensions.startTransaction=m),e.__SENTRY__.extensions.traceHeaders||(e.__SENTRY__.extensions.traceHeaders=l)),Object(o.b)()&&function(){var e=Object(a.c)();if(e.__SENTRY__){var n={mongodb:function(){return new(Object(o.a)(t,"./integrations/node/mongo").Mongo)},mongoose:function(){return new(Object(o.a)(t,"./integrations/node/mongo").Mongo)({mongoose:!0})},mysql:function(){return new(Object(o.a)(t,"./integrations/node/mysql").Mysql)},pg:function(){return new(Object(o.a)(t,"./integrations/node/postgres").Postgres)}},s=Object.keys(n).filter((function(t){return!!Object(o.c)(t)})).map((function(t){try{return n[t]()}catch(t){return}})).filter((function(t){return t}));s.length>0&&(e.__SENTRY__.integrations=Object(i.e)(e.__SENTRY__.integrations||[],s))}}(),Object(c.a)()}}).call(this,n("2ffc")(t))},be56:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={};n.r(i),n.d(i,"Express",(function(){return c})),n.d(i,"Postgres",(function(){return f})),n.d(i,"Mysql",(function(){return m})),n.d(i,"Mongo",(function(){return b})),n.d(i,"BrowserTracing",(function(){return _.a}));var a=n("339f"),s=n("fd63"),r=n("703e"),o=n("9644"),c=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._router=e.router||e.app,this._methods=(Array.isArray(e.methods)?e.methods:[]).concat("use")}return t.prototype.setupOnce=function(){this._router?function(t,e){void 0===e&&(e=[]);e.forEach((function(e){return function(t,e){var n=t[e];return t[e]=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return n.call.apply(n,Object(s.e)([this],d(t,e)))},t}(t,e)}))}(this._router,this._methods):o.a&&r.c.error("ExpressIntegration is missing an Express instance")},t.id="Express",t}();function p(t,e){var n=t.length;switch(n){case 2:return function(n,i){var a=i.__sentry_transaction;if(a){var s=a.startChild({description:t.name,op:"express.middleware."+e});i.once("finish",(function(){s.finish()}))}return t.call(this,n,i)};case 3:return function(n,i,a){var r,o=null===(r=i.__sentry_transaction)||void 0===r?void 0:r.startChild({description:t.name,op:"express.middleware."+e});t.call(this,n,i,(function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];null===(t=o)||void 0===t||t.finish(),a.call.apply(a,Object(s.e)([this],e))}))};case 4:return function(n,i,a,r){var o,c=null===(o=a.__sentry_transaction)||void 0===o?void 0:o.startChild({description:t.name,op:"express.middleware."+e});t.call(this,n,i,a,(function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];null===(t=c)||void 0===t||t.finish(),r.call.apply(r,Object(s.e)([this],e))}))};default:throw new Error("Express middleware takes 2-4 arguments. Got: "+n)}}function d(t,e){return t.map((function(t){return"function"==typeof t?p(t,e):Array.isArray(t)?t.map((function(t){return"function"==typeof t?p(t,e):t})):t}))}var u=n("dc75"),h=n("3c5f"),l=n("6bb1"),f=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._usePgNative=!!e.usePgNative}return t.prototype.setupOnce=function(t,e){var n,i=Object(u.c)("pg");if(i)if(!this._usePgNative||(null===(n=i.native)||void 0===n?void 0:n.Client)){var a=(this._usePgNative?i.native:i).Client;Object(h.e)(a.prototype,"query",(function(t){return function(n,i,a){var s,r,o,c=null===(r=null===(s=e().getScope())||void 0===s?void 0:s.getSpan())||void 0===r?void 0:r.startChild({description:"string"==typeof n?n:n.text,op:"db"});if("function"==typeof a)return t.call(this,n,i,(function(t,e){var n;null===(n=c)||void 0===n||n.finish(),a(t,e)}));if("function"==typeof i)return t.call(this,n,(function(t,e){var n;null===(n=c)||void 0===n||n.finish(),i(t,e)}));var p=void 0!==i?t.call(this,n,i):t.call(this,n);return Object(l.n)(p)?p.then((function(t){var e;return null===(e=c)||void 0===e||e.finish(),t})):(null===(o=c)||void 0===o||o.finish(),p)}}))}else o.a&&r.c.error("Postgres Integration was unable to access 'pg-native' bindings.");else o.a&&r.c.error("Postgres Integration was unable to require `pg` package.")},t.id="Postgres",t}(),m=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(t,e){var n=Object(u.c)("mysql/lib/Connection.js");n?Object(h.e)(n,"createQuery",(function(t){return function(n,i,a){var s,r,o=null===(r=null===(s=e().getScope())||void 0===s?void 0:s.getSpan())||void 0===r?void 0:r.startChild({description:"string"==typeof n?n:n.sql,op:"db"});return"function"==typeof a?t.call(this,n,i,(function(t,e,n){var i;null===(i=o)||void 0===i||i.finish(),a(t,e,n)})):"function"==typeof i?t.call(this,n,(function(t,e,n){var a;null===(a=o)||void 0===a||a.finish(),i(t,e,n)})):t.call(this,n,i,a)}})):o.a&&r.c.error("Mysql Integration was unable to require `mysql` package.")},t.id="Mysql",t}(),g=["aggregate","bulkWrite","countDocuments","createIndex","createIndexes","deleteMany","deleteOne","distinct","drop","dropIndex","dropIndexes","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndReplace","findOneAndUpdate","indexes","indexExists","indexInformation","initializeOrderedBulkOp","insertMany","insertOne","isCapped","mapReduce","options","parallelCollectionScan","rename","replaceOne","stats","updateMany","updateOne"],v={bulkWrite:["operations"],countDocuments:["query"],createIndex:["fieldOrSpec"],createIndexes:["indexSpecs"],deleteMany:["filter"],deleteOne:["filter"],distinct:["key","query"],dropIndex:["indexName"],find:["query"],findOne:["query"],findOneAndDelete:["filter"],findOneAndReplace:["filter","replacement"],findOneAndUpdate:["filter","update"],indexExists:["indexes"],insertMany:["docs"],insertOne:["doc"],mapReduce:["map","reduce"],rename:["newName"],replaceOne:["filter","doc"],updateMany:["filter","update"],updateOne:["filter","update"]},b=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._operations=Array.isArray(e.operations)?e.operations:g,this._describeOperations=!("describeOperations"in e)||e.describeOperations,this._useMongoose=!!e.useMongoose}return t.prototype.setupOnce=function(t,e){var n=this._useMongoose?"mongoose":"mongodb",i=Object(u.c)(n);i?this._instrumentOperations(i.Collection,this._operations,e):o.a&&r.c.error("Mongo Integration was unable to require `"+n+"` package.")},t.prototype._instrumentOperations=function(t,e,n){var i=this;e.forEach((function(e){return i._patchOperation(t,e,n)}))},t.prototype._patchOperation=function(t,e,n){if(e in t.prototype){var i=this._getSpanContextFromOperationArguments.bind(this);Object(h.e)(t.prototype,e,(function(t){return function(){for(var a,r,o,c,p=[],d=0;d<arguments.length;d++)p[d]=arguments[d];var u=p[p.length-1],h=n().getScope(),f=null===(a=h)||void 0===a?void 0:a.getSpan();if("function"!=typeof u||"mapReduce"===e&&2===p.length){var m=null===(r=f)||void 0===r?void 0:r.startChild(i(this,e,p)),g=t.call.apply(t,Object(s.e)([this],p));return Object(l.n)(g)?g.then((function(t){var e;return null===(e=m)||void 0===e||e.finish(),t})):(null===(o=m)||void 0===o||o.finish(),g)}var v=null===(c=f)||void 0===c?void 0:c.startChild(i(this,e,p.slice(0,-1)));return t.call.apply(t,Object(s.e)([this],p.slice(0,-1),[function(t,e){var n;null===(n=v)||void 0===n||n.finish(),u(t,e)}]))}}))}},t.prototype._getSpanContextFromOperationArguments=function(t,e,n){var i={collectionName:t.collectionName,dbName:t.dbName,namespace:t.namespace},a={op:"db",description:e,data:i},r=v[e],o=Array.isArray(this._describeOperations)?this._describeOperations.includes(e):this._describeOperations;if(!r||!o)return a;try{if("mapReduce"===e){var c=Object(s.c)(n,2),p=c[0],d=c[1];i[r[0]]="string"==typeof p?p:p.name||"<anonymous>",i[r[1]]="string"==typeof d?d:d.name||"<anonymous>"}else for(var u=0;u<r.length;u++)i[r[u]]=JSON.stringify(n[u])}catch(t){}return a},t.id="Mongo",t}(),_=n("19ad");Object(a.a)()},c654:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var i=n("fd63"),a=n("e434"),s=n("1a6e"),r=n("3c5f"),o=function(){function t(t){void 0===t&&(t=1e3),this.spans=[],this._maxlen=t}return t.prototype.add=function(t){this.spans.length>this._maxlen?t.spanRecorder=void 0:this.spans.push(t)},t}(),c=function(){function t(t){if(this.traceId=Object(a.f)(),this.spanId=Object(a.f)().substring(16),this.startTimestamp=Object(s.d)(),this.tags={},this.data={},!t)return this;t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp)}return t.prototype.child=function(t){return this.startChild(t)},t.prototype.startChild=function(e){var n=new t(Object(i.a)(Object(i.a)({},e),{parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId}));return n.spanRecorder=this.spanRecorder,n.spanRecorder&&n.spanRecorder.add(n),n.transaction=this.transaction,n},t.prototype.setTag=function(t,e){var n;return this.tags=Object(i.a)(Object(i.a)({},this.tags),((n={})[t]=e,n)),this},t.prototype.setData=function(t,e){var n;return this.data=Object(i.a)(Object(i.a)({},this.data),((n={})[t]=e,n)),this},t.prototype.setStatus=function(t){return this.status=t,this},t.prototype.setHttpStatus=function(t){this.setTag("http.status_code",String(t));var e=function(t){if(t<400&&t>=100)return"ok";if(t>=400&&t<500)switch(t){case 401:return"unauthenticated";case 403:return"permission_denied";case 404:return"not_found";case 409:return"already_exists";case 413:return"failed_precondition";case 429:return"resource_exhausted";default:return"invalid_argument"}if(t>=500&&t<600)switch(t){case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline_exceeded";default:return"internal_error"}return"unknown_error"}(t);return"unknown_error"!==e&&this.setStatus(e),this},t.prototype.isSuccess=function(){return"ok"===this.status},t.prototype.finish=function(t){this.endTimestamp="number"==typeof t?t:Object(s.d)()},t.prototype.toTraceparent=function(){var t="";return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),this.traceId+"-"+this.spanId+t},t.prototype.toContext=function(){return Object(r.c)({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})},t.prototype.updateWithContext=function(t){var e,n,i,a,s;return this.data=null!=(e=t.data)?e:{},this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=null!=(n=t.spanId)?n:this.spanId,this.startTimestamp=null!=(i=t.startTimestamp)?i:this.startTimestamp,this.status=t.status,this.tags=null!=(a=t.tags)?a:{},this.traceId=null!=(s=t.traceId)?s:this.traceId,this},t.prototype.getTraceContext=function(){return Object(r.c)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})},t.prototype.toJSON=function(){return Object(r.c)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})},t}()},d401:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o}));var i=n("a1aa");function a(t){var e=Object(i.b)().getClient(),n=t||e&&e.getOptions();return!!n&&("tracesSampleRate"in n||"tracesSampler"in n)}function s(t){var e=(t||Object(i.b)()).getScope();return e&&e.getTransaction()}function r(t){return t/1e3}function o(t){return 1e3*t}},fe38:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("fd63"),a=n("a1aa"),s=n("6bb1"),r=n("703e"),o=n("3c5f"),c=n("9644"),p=n("c654"),d=function(t){function e(e,n){var i=t.call(this,e)||this;return i._measurements={},i._hub=Object(a.b)(),Object(s.g)(n,a.a)&&(i._hub=n),i.name=e.name||"",i.metadata=e.metadata||{},i._trimEnd=e.trimEnd,i.transaction=i,i}return Object(i.b)(e,t),e.prototype.setName=function(t){this.name=t},e.prototype.initSpanRecorder=function(t){void 0===t&&(t=1e3),this.spanRecorder||(this.spanRecorder=new p.b(t)),this.spanRecorder.add(this)},e.prototype.setMeasurements=function(t){this._measurements=Object(i.a)({},t)},e.prototype.setMetadata=function(t){this.metadata=Object(i.a)(Object(i.a)({},this.metadata),t)},e.prototype.finish=function(e){var n=this;if(void 0===this.endTimestamp){if(this.name||(c.a&&r.c.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),t.prototype.finish.call(this,e),!0===this.sampled){var i=this.spanRecorder?this.spanRecorder.spans.filter((function(t){return t!==n&&t.endTimestamp})):[];this._trimEnd&&i.length>0&&(this.endTimestamp=i.reduce((function(t,e){return t.endTimestamp&&e.endTimestamp?t.endTimestamp>e.endTimestamp?t:e:t})).endTimestamp);var a={contexts:{trace:this.getTraceContext()},spans:i,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:this.metadata};return Object.keys(this._measurements).length>0&&(c.a&&r.c.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),a.measurements=this._measurements),c.a&&r.c.log("[Tracing] Finishing "+this.op+" transaction: "+this.name+"."),this._hub.captureEvent(a)}c.a&&r.c.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");var s=this._hub.getClient(),o=s&&s.getTransport&&s.getTransport();o&&o.recordLostEvent&&o.recordLostEvent("sample_rate","transaction")}},e.prototype.toContext=function(){var e=t.prototype.toContext.call(this);return Object(o.c)(Object(i.a)(Object(i.a)({},e),{name:this.name,trimEnd:this._trimEnd}))},e.prototype.updateWithContext=function(e){var n;return t.prototype.updateWithContext.call(this,e),this.name=null!=(n=e.name)?n:"",this._trimEnd=e.trimEnd,this},e}(p.a)}}]);