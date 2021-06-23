import axios from 'axios';

describe("test from ci", () => {
  it("basic test", async () => {
      const res = await axios.get('http://localhost:3456/ci-test-endpoint');
      console.log(res.data);
      console.log('basic test is run');
  });
});
