export default {
    name: 'healthpackageC1', 
    type: 'document',
    title: 'Health Package C1',
    fields: [
        {
            name: 'packageName',
            type: 'string',
            title: 'Package Name',
        },
        {
            name: 'HealthPackageimage',
            type: 'image',
            title: 'Health Package Image',
            options: {
                hotspot: true,
            },
        }
    ]
}