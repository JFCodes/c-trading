export const CONFIG = {
  BINANCE_API: {
    BASE_ENDPOINT: 'https://data-api.binance.vision/api/v3/'
  },

  DATABASE: {
    HOST: 'c3qgr3ujgs22q4.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com',
    PORT: 5432,
    USER: 'u69o03b2bvko48',
    PASSWORD: 'pca5db897a239c0448848edcb0cbadab0a82b8e8fcb4b2def5ab35f68f6ef9ee5',
    DATABASE: 'd65kn4ua17feog',
    CONNECTOR_POOL: {
      CONNECTION_TIMEOUT_MILLISECONDS: 10000,
      IDLE_TIMEOUT_MILLISECONDS: 60000,
      MAX: 10,
    },
  }
}
