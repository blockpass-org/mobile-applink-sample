# mobile-applink-sample

This git provides a sample for invoking Blockpass Mobile App to conduct Service registration process. The invocation is done through app linking.

The format for applink is as follow:

`<BP_APPLINK_SCHEMA>://service-register/<client_id>?refid=<ref_id>&session=<session_id>&redirect=<redirect>`

In which:
- `BP_APPLINK_SCHEMA`:
  - blockpass-staging: Blockpass testing mobile application (has black logo), can contact Blockpass development team to get access
  - blockpass: Blockpass mobile application, available on AppStore & Android playstore
- `client_id`: get from Developer portal or Service List Api
- `ref_id`: unique identifier for a user
- `session_id`: unique identifier for the current session
- `redirect`: in case Service wants Blockpass to invoke its mobile application after registration, must be in encoded URL. (can use function encodeURIComponent in Javascript)
