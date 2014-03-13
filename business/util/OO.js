var __hasProp = {}.hasOwnProperty;

var __extends = function (child, parent) {
    for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
    }

    function ctor() {
        this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
};

var __constructorSuperApply = function(klass, self, args){
  klass.__super__.constructor.apply(self, args);
}

var __super = function (klass, method, self) {
  klass.__super__[method].call(self);
}

module.exports = {
  extends: __extends,
  ctorSuper: __constructorSuperApply,
  callSuper: __super
}