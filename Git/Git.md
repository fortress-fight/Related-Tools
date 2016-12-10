# Git
记录使用工具中遇到的问题，以及相关解决方法

## 1. 遇到 master变成黄色，箭头变成上下箭头

1）git status 发现报错 Pull is not possible because you have unmerged files.

2）应该是因为local文件冲突了
解决方法：
1.pull会使用git merge导致冲突，需要将冲突的文件resolve掉 git add -u, git commit之后才能成功pull.

2.如果想放弃本地的文件修改，可以使用git reset --hard FETCH_HEAD，FETCH_HEAD表示上一次成功git pull之后形成的commit点。然后git pull.
注意：

git merge会形成MERGE-HEAD(FETCH-HEAD) 。git push会形成HEAD这样的引用。HEAD代表本地最近成功push后形成的引用。

”

就我的经验，有时候会莫名其妙地出现这种状况，而且Untracked files 还特别多（实际上自己可能只改了一两个文件），所以只好先保存好自己确定做出的local的修改，然后用git reset --hard FETCH_HEAD回到上次成功pull之后的点，然后再pull就没有问题了

最终使用了方法一解决问题，忘记截图了。。

<a href="http://cache.baiducontent.com/c?m=9d78d513d99316fe0baad5291a16a62d441397634d8d835128c39339d43804160733b4ed30226150889b2b2616ae394bea872235775d2feddd8eca5ddcc88f357fd67a61671cf110538545b8cb317996668d10b2f34ca0e9ac3193aad7ce8c141591025b2d9da6dc1c534f942eed153ae1a6934d1f54&p=9136c64ad4af5fea08e2977e0c4dbb&newp=ce3fda15d9c041ae44aedb2d0214c1231610db2151d4d2166b82c825d7331b001c3bbfb42323170ed5c7796600aa4f57eafa3373370025a3dda5c91d9fb4c5747994647b&user=baidu&fm=sc&query=because+you+have+unmerged+files%2E&qid=e250137d00007200&p1=2">解决方式原地址</a>


2:

使用push的时候让你输入name 和 password；

Username for 'https://github.com':
Password for 'https://hainuo@github.com':

提交后报错

可能需要将 http 转 成 ssh：

https://help.github.com/articles/changing-a-remote-s-url/