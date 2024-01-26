const lockfile = require('proper-lockfile');
const fs = require('fs-extra');
let array=["Line_Items_1701406874.csv",
"Line_Items_1701493274.csv",
    "Line_Items_1701579676.csv",
    "Line_Items_1701666075.csv",
    "Line_Items_1701752476.csv",
    "Line_Items_1701843138.csv",
    "Line_Items_1701929585.csv",
    "Line_Items_1702015961.csv",
    "Line_Items_1702102350.csv",
    "Line_Items_1702188760.csv",
    "Line_Items_1702274400.csv",
    "Line_Items_1702360800.csv",
    "Line_Items_1702447200.csv",
    "Line_Items_1702533600.csv",
    "Line_Items_1702620000.csv",
    "Line_Items_1702706400.csv",
    "Line_Items_1702792800.csv",
    "Line_Items_1702879200.csv",
    "Line_Items_1702965600.csv",
    "Line_Items_1703052000.csv",
    "Line_Items_1703138400.csv",
    "Line_Items_1703224800.csv",
    "Line_Items_1703311200.csv",
    "Line_Items_1703397600.csv",
    "Line_Items_1703484000.csv",
    "Line_Items_1703570400.csv",
    "Line_Items_1703656800.csv",
    "Line_Items_1703743200.csv",
    "Line_Items_1703829600.csv",
    "Line_Items_1703916000.csv",
    "Line_Items_1704002400.csv",
    "Line_Items_1704088800.csv",
    "Line_Items_1704175200.csv",
    "Line_Items_1704261600.csv",
    "Line_Items_1704348000.csv",
    "Line_Items_1704434400.csv",
    "Line_Items_1704520800.csv",
    "Line_Items_1704607200.csv",
    "Line_Items_1704693600.csv",
    "Line_Items_1704780000.csv",
    "Line_Items_1704866400.csv",
    "Line_Items_1704952800.csv",
    "Line_Items_1705039200.csv",
    "Line_Items_1705125600.csv",
    "Line_Items_1705212000.csv",
    "Line_Items_1705298400.csv",
    "Line_Items_1705384800.csv",
    "Line_Items_1705471200.csv",
    "Line_Items_1705557600.csv",
    "Line_Items_1705644000.csv",
    "Line_Items_1705730400.csv",
    "Line_Items_1705816800.csv",
    "Line_Items_1705903200.csv",
    "Line_Items_1705989600.csv"];
array.forEach(function (item, index) {
  console.log(item, index);
 lockfile.lock('/Users/reetu.sood/repo/gstv-cloud-vistar-api-reporting/src-ts/Line_Items_1706076000.csv',{
    retries: { retries: 100, minTimeout: 10, maxTimeout: 100 },
  }).then
  (() => fs.copyFileSync('/Users/reetu.sood/repo/gstv-cloud-vistar-api-reporting/src-ts/Line_Items_1706076000.csv', `/Users/reetu.sood/repo/gstv-cloud-vistar-api-reporting/src-ts/NEW/${item}`))

  .finally(() => lockfile.unlockSync('/Users/reetu.sood/repo/gstv-cloud-vistar-api-reporting/src-ts/Line_Items_1706076000.csv'));
});


