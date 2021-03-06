if (!process.env.OCTOPUS_APIKEY) {
    throw new Error("Missing OCTOPUS_APIKEY");
}
const octo = require('@octopusdeploy/octopackjs');
const octopusUrl = 'https://learning.octopus.app';

octo.pack()
    // https://nextjs.org/docs/advanced-features/static-html-export#deployment
    // By default, next export will generate an `out` directory
    .appendSubDir('build', true)
    .toFile('.', (err, data) => {
        console.log('Package Saved: ' + data.name);
        octo.push(data.name, {
            host: octopusUrl,
            apikey: process.env.OCTOPUS_APIKEY,
            spaceId: 'Spaces-1',
            replace: true
        },
        err => err ? console.error(err.body) : console.log('Package Pushed to ' + octopusUrl));
    });
