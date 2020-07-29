import flagpole from 'flagpole';

const suite = flagpole('Basic Smoke Test of API');

suite
  .scenario('Root endpoint loads', 'json')
  .open('/')
  .next(async (context) => {});
