const attributes= {
    url: {
        type: 'string'
    },
    alt: {
        type: 'string'
    },
    id: {
        type: 'number'
    },
    name: {
        type: 'string',
        default: 'John Doe'
    },
    position: {
        type: 'string',
        default: 'CEO'
    },
    bio: {
        type: 'string'
    },
    showSocialProfile: {
        type: 'boolean',
        default: true
    },
    fbLink: {
        type: 'string',
        default: '#'
    },
    twLink: {
        type: 'string',
        default: '#'
    },
    linkedinLink: {
        type: 'string',
        default: '#'
    },
    insLink: {
        type: 'string',
        default: '#'
    },
    whsLink: {
        type: 'string',
        default: '#'
    },
    ytLink: {
        type: 'string',
        default: '#'
    },
};

export default attributes; 
