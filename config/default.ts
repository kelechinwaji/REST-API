export default{
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1yr",
   privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgHaoH+VARDrb9GWCK+S9nadzIk7B6mftfx6drmRkTW/4McS3UL1K
j95T8wnpa6+NRzjdpO/WPB52g62pxegHLhSSes2Kk7Zfwn2OropphVm74nlW2e2G
XGSuLRMxMdTdQfd356MgYvXdXHYMnUmgFYcg1s3YyWrO64d/SKlZesLzAgMBAAEC
gYAVKc1ujTTeLqb7h+keRjedSyq+U1XkrXZz1nnpS/6HzwPJa0zKRkc8x0pc5TYg
vJkManPllxdn84lu6w3yYX11SzP3YqFpbzaAUKoNUwcKoBfTau3f7CThy4NMjzPh
kG+coIf64GljBudv1wP/RhpadfJe7iMpV1uRaf+HGz8C+QJBAOcq05LjGB9J0Ciu
3TnJFGRpWC9ns0TrZbiWw5h5k7lRZN5td2sO+FCqRml3zojeCJ5wNRkpP8l6A+v7
UCkZQwcCQQCDZzjrbgm0vq7ctzTiBd2YEi8WpEvdEt33xnKVUMF5EJcm2zoLewe6
JverpcUoTsM0vmZz7xxFQ8SWPPbWO+m1AkEAjSeXfa/xwNk/pDfymiBwtUemM3ws
+T6MJITa9rX2QEi1QSSysMq5UfhHeotPsD90H9sAcVbAvnQlBOm2bwIf7QJAOGUx
waEtWzxHUgTzFlpMG3saaI5E3PG/ABtUjA7nqizbolqOU+UOkO8udqWjs0PydY2N
7Q3fRT7rfUtW6OU3zQJBAJFmu12CPuae49jJ3utWtyh3BllLz5ykaGfy14JETbrA
QaIfSrDCL4QQTW/FD5vL/mwmKH6Q66WLvvBdXC4sMVI=
-----END RSA PRIVATE KEY-----`,

publicKey:`-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHaoH+VARDrb9GWCK+S9nadzIk7B
6mftfx6drmRkTW/4McS3UL1Kj95T8wnpa6+NRzjdpO/WPB52g62pxegHLhSSes2K
k7Zfwn2OropphVm74nlW2e2GXGSuLRMxMdTdQfd356MgYvXdXHYMnUmgFYcg1s3Y
yWrO64d/SKlZesLzAgMBAAE=
-----END PUBLIC KEY-----`
};