export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            diagnostics: {
              ignoreCodes: [1343]
            },
            astTransformers: {
              before: [
                {
                  path: 'node_modules/ts-jest-mock-import-meta',  // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
                  options: {
                    metaObjectReplacement: {
                      env: {
                        // Replicate as .env.local
                        VITE_API_PATH: 'http://localhost:5173',
                      },
                    },
                  },
                }
              ]
            }
          }
        ]
    },
    rootDir: "src",
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/config/jest/fileMock.ts',
      '^.+\\.(css|less|scss|sass)$': '<rootDir>/config/jest/styleMock.ts',
    },
}