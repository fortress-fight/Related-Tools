# Git
记录使用工具中遇到的问题，以及相关解决方法

## 1. 遇到 master变成黄色，箭头变成上下箭头---是指merge失败

1）git status 发现报错 Pull is not possible because you have unmerged files.

2）应该是因为local文件冲突了
解决方法：
1.pull会使用git merge导致冲突，需要将冲突的文件resolve掉 git add -u, git commit之后才能成功pull.

2.如果想放弃本地的文件修改，可以使用git reset --hard FETCH_HEAD，FETCH_HEAD表示上一次成功git pull之后形成的commit点。然后git pull.
注意：

git merge会形成MERGE-HEAD(FETCH-HEAD) 。git push会形成HEAD这样的引用。HEAD代表本地最近成功push后形成的引用。

”

就我的经验，有时候会莫名其妙地出现这种状况，而且Untracked files 还特别多（实际上自己可能只改了一两个文件），所以只好先保存好自己确定做出的local的修改，然后用git reset --hard FETCH_HEAD回到上次成功push之后的点，然后再push就没有问题了

最终使用了方法一解决问题，忘记截图了。。

<a href="http://cache.baiducontent.com/c?m=9d78d513d99316fe0baad5291a16a62d441397634d8d835128c39339d43804160733b4ed30226150889b2b2616ae394bea872235775d2feddd8eca5ddcc88f357fd67a61671cf110538545b8cb317996668d10b2f34ca0e9ac3193aad7ce8c141591025b2d9da6dc1c534f942eed153ae1a6934d1f54&p=9136c64ad4af5fea08e2977e0c4dbb&newp=ce3fda15d9c041ae44aedb2d0214c1231610db2151d4d2166b82c825d7331b001c3bbfb42323170ed5c7796600aa4f57eafa3373370025a3dda5c91d9fb4c5747994647b&user=baidu&fm=sc&query=because+you+have+unmerged+files%2E&qid=e250137d00007200&p1=2">解决方式原地址</a>

如果确定放弃这次合并的提交，假如是 merge 了错误的分支到 master，先通过git reflog或者 gitg、gitk、qgit 等工具确定你 merge 之前 master 所在的 commit，然后在 master 分支上使用
`git reset --hard <commit`
重置头指针。一般来说，在 master 上直接执行
git reset --hard HEAD~
也可以回到合并之前的提交，但
git reset --hard
命令还是使用确定的 commit 为好。注意，
git reset --hard
命令有风险，除非十分确定要放弃当前提交，否则最好先git branch为当前的提交建立个新的分支引用后再继续，待确定无误后删除即可。
如果错误的合并之后又有了新的提交，可以在完成前述正确的合并之后，通过
git rebase --onto <错误的合并提交 <正确的合并提交 <新提交所在分支
来在正确的合并提交上重建新的提交。
git rebase --onto
命令所重建的提交序列最好是线性的，否则非线性的提交会变成线性的。若需要保存非线性的提交历史，可以考虑使用
参数，不过结果很不可靠，具体视提交的非线性程度而定。

2:

使用push的时候让你输入name 和 password；

Username for 'https://github.com':
Password for 'https://hainuo@github.com':

提交后报错

可能需要将 http 转 成 ssh：

使用git remote -v查看

http --- ssh
git remote set-url origin git@github.com:USERNAME/OTHERREPOSITORY.git
ssh --- http
git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git

https://help.github.com/articles/changing-a-remote-s-url/


3:  git add时候报错:LF will be replaced by CRLF

http://blog.csdn.net/loovejava/article/details/22114477

在家里图形工具在将修改好的代码提到本地Git仓的时候出现了如下错误：
[html] view plain copy print?在CODE上查看代码片派生到我的代码片
warning: LF will be replaced by CRLF   
fatal: CRLF would be replaced by LF  

不影响提交代码，但是很恶心，每次都一样的错误

后来查了下资料才发现是一个配置选项修改就行了，网友也有说转换符号的，两种方法如下：
1.宗旨就是core.autocrlf 设置成false
直接上命令
[python] view plain copy print?在CODE上查看代码片派生到我的代码片
#备注可以使用--global 也可以不实用，影响不大  
git config --global core.autocrlf true #这个是转换，也是默认值  
git config --global core.autocrlf input #貌似是上库转换，从库中迁出代码不转换  
git config --global core.autocrlf false  #这个一般是window上的，不转换  

# git 中文路径显示为数字的处理方式：

设置全局配置
    quotepath -- 引用路径；
    `git config --global core.quotepath false`