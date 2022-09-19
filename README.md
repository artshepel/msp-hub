## Structure

	.
	├── docs                       # Documentation files
	├── public                     
	├── src                        # Source files
	│   ├── assetc                 # Assets (fonts etc.)
	│   ├── components             # React components
	│   ├── features               # Redux logic for any functional feature
	│   ├── hooks                  # Shared hooks
	│   ├── redux                  # Redux root folder
	│   ├── theme                  # Application theme files
	│   │   ├── variables.scss     # Common styles variables
	│   │   ├── styles.scss        # Shared styles classes
	├── configs                    # Configuration files
	│   ├── webpack                # Webpack configuration
	└── README.md

## Prerequisites

```bash
$ yarn install
```

## Available Scripts

- `start` - start app in development mode,
- `lint` - lint source files and tests,
- `prettier` - reformat files,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## Commit

[Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) is checked by husky.
