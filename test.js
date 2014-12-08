/**
 * minutes <https://github.com/jonschlinkert/minutes>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var should = require('should');
var moment = require('moment');
var minutes = require('./');

describe('minutes()', function() {
  it('should get the minutes for a minute.', function() {
    minutes('minute').should.equal(moment.duration(1, 'minute').asMinutes());
  });

  it('should get the minutes for an hour.', function() {
    minutes('hour').should.equal(moment.duration(1, 'hour').asMinutes());
  });

  it('should get the minutes for a day.', function() {
    minutes('day').should.equal(moment.duration(1, 'day').asMinutes());
  });

  it('should get the minutes for a week.', function() {
    minutes('week').should.equal(moment.duration(1, 'week').asMinutes());
  });

  it('should get the minutes for the current day, since midnight.', function() {
    var today = minutes('today');
    var now = new Date();
    var since = ((now.getTime() - now.setHours(0, 0, 0, 0)) / 1000) | 0;
    (Math.round(since / 60)).should.equal(today);
  });
});
