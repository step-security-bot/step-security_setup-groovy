[![StepSecurity Maintained Action](https://raw.githubusercontent.com/step-security/maintained-actions-assets/main/assets/maintained-action-banner.png)](https://docs.stepsecurity.io/actions/stepsecurity-maintained-actions)

The `step-security/setup-groovy` action is a JavaScript action that sets up [Apache Groovy](https://groovy-lang.org/) in your GitHub Actions workflow. by:

- Downloading a requested version of Groovy and adding it to the `PATH`.

# 🔧 Usage

See [action.yml](action.yml)

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners.

```yml
steps:
  - uses: step-security/setup-groovy@v3
    with:
      groovy-version: "5.x"
  - run: groovy --version
```

## 📊 Supported version syntax

If there is a specific version of Groovy that you need and you don't want to worry about any potential breaking changes due to patch updates (going from `4.0.8` to `4.0.9` for example), you should specify the **exact major, minor, and patch version** (such as `4.0.9`):

```yaml
steps:
  - uses: actions/checkout@v6
  - uses: step-security/setup-groovy@v3
    with:
      groovy-version: "4.0.9"
  - run: groovy HelloWorld.groovy
```

You can specify **only a major and minor version** if you are okay with the most recent patch version being used:

```yaml
steps:
  - uses: actions/checkout@v6
  - uses: step-security/setup-groovy@v3
    with:
      groovy-version: "4.0"
  - run: groovy HelloWorld.groovy
```

You can also use ranges that are specified in [semver](https://github.com/npm/node-semver#ranges), for example a [hyphen-range](https://github.com/npm/node-semver#advanced-range-syntax):

```yaml
steps:
  - uses: actions/checkout@v6
  - uses: step-security/setup-groovy@v3
    with:
      groovy-version: ">=3.x <4.0.0"
  - run: groovy HelloWorld.groovy
```
