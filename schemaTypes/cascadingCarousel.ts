export default {
    name: 'dropdown',
    type: 'object',
    title: 'dropdown',
    fields: [
        { name: 'Hospital', type: 'string' },
        {
            name: 'specialities',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'speciality', type: 'string' },
                        {
                            name: 'doctors',
                            type: 'array',
                            of: [{ type: 'string' }]
                        }
                    ]
                }
            ]
        }
    ]
}