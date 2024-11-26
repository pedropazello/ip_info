const getIP = require('./get_ip');

const resp = {
  ip: "8.8.8.8",
  city: "Mountain View",
  region: "California",
  region_code: "CA",
  country_code: "US",
  country_code_iso3: "USA",
  country_name: "United States",
  country_capital: "Washington",
  country_tld: ".us",
  continent_code: "NA",
  in_eu: false,
  postal: "94035",
  latitude: 37.386,
  longitude: -122.0838,
  timezone: "America/Los_Angeles",
  utc_offset: "-0800",
  country_calling_code: "+1",
  currency: "USD",
  currency_name: "Dollar",
  languages: "en-US,es-US,haw",
  asn: "AS15169",
  org: "Google LLC",
} 

const mockCallback = jest.fn(x => {
  return resp
});

test('test ip', async () => {
  expect(await getIP("8.8.8.8", mockCallback)).toEqual(resp);
});