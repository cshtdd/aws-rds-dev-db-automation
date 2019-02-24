const rfr = require('rfr')
const configHelper = rfr('lib/config')

var config = {
    restore: {
        enabled: false,
        region: 'us-east-1',
        prod: {
            dbIdentifier: 'PROD_DATABASE_NAME'
        },
        dev: {
            databasePrefix: 'DEV_DATABASE_NAME',
            masterPassword: 'DEV_DATABASE_PASSWORD',
            securityGroups: ['sg-1', 'sg-2'],
            tags: [
                { Key: 'db_type', Value: 'dev' },
                { Key: 'automated_restore', Value: 'true' }
            ],
            availabilityZone: 'us-east-1c',
            instanceClass: 'db.t2.small',
            publiclyAccessible: false,
            multiAZ: false
        }
    },
    updateConnectionString: {
        enabled: false,
        region: 'us-east-1',
        environmentName: 'DEV_ENVIRONMENT_NAME',
        connectionStringKey: 'CONNECTION_STRING_ENVIRONMENT_VARIABLE_NAME',
        base64: true
    },
    sanitizeDevDatabase: {
        enabled: false,
        scripts: [
            'script1.sql',
            'script2.sql',
        ]
    },
    deleteOldDevDatabase: {
        enabled: false,
        databasePrefix: 'DEV_DATABASE_NAME'
    }
}

configHelper.write(config)
