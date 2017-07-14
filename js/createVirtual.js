/**
 * Created by Administrator on 2017/7/10 0010.
 */
$(document).ready(function () {
    $("#createVirtual .MN").each(function() {
        $(this).click(function() {
            if ($(this).hasClass("MN-next")) {
                $("#createVirtual .carousel").carousel('next');
                $("#createVirtual .step li.active").next().addClass("active");
            } else {
                $("#createVirtual .carousel").carousel('prev');
                if ($("#createVirtual .step li").length > 1) {
                    $($($("#createVirtual .step li.active"))[$("#createVirtual .step li.active").length - 1]).removeClass("active")
                }
            }
        })
    });
    //配置确认动态添加前面的值
    $("#batch_config").on("click",function () {
        var number=$("#number").val();
        var base_structure=$("#base_structure").val();
        var address=$("#address").val();
        var templet=$("#templet").val();
        var name_01=$("#name_01").val();
        var name_02=$("#name_02").val();
        var virtualName=name_01+name_02;
        var CPU_he=$("#CPU_he").val();
        var memory_GB=$("#memory_GB").val();
        var cpu_memory=CPU_he+"核"+CPU_he+"GB";
        $($($("#configEnsure").children("li")[0]).children("span")[1]).html(number);
        $($($("#configEnsure").children("li")[1]).children("span")[1]).html(base_structure);
        $($($("#configEnsure").children("li")[2]).children("span")[1]).html(address);
        $($($("#configEnsure").children("li")[3]).children("span")[1]).html(templet);
        $($($("#configEnsure").children("li")[4]).children("span")[1]).html(virtualName);
        $($($("#configEnsure").children("li")[5]).children("span")[1]).html(cpu_memory);
        if(!$('#firstStep').data('bootstrapValidator').isValid()){

            //没有通过校验

        } else {

            //通过校验，可进行提交等操作

        }
    });
    $("#web_config").on("click",function () {
        var web_type=$("#web_type").val();
        var IP_pre=$("#IP_pre").val();
        var IP_start=$("#IP_start").val();
        var IP_name=IP_pre+IP_start;
        var web_child=$("#web_child").val();
        var gataway=$("#gataway").val();
        var DNS_number=$("#DNS_number").val();
        $($($("#configEnsure").children("li")[6]).children("span")[1]).html(web_type);
        $($($("#configEnsure").children("li")[7]).children("span")[1]).html(IP_name);
        $($($("#configEnsure").children("li")[8]).children("span")[1]).html(web_child);
        $($($("#configEnsure").children("li")[9]).children("span")[1]).html(gataway);
        $($($("#configEnsure").children("li")[10]).children("span")[1]).html(DNS_number);
    });
    $("#storage_config").on("click",function () {
        var storage_ipt=$("#storage_ipt").val();
        var checked=$("#disk_type").find("input").filter(":checked");
        var disk_type=checked.parents("li").children("span").html();
        $($($("#configEnsure").children("li")[11]).children("span")[1]).html(storage_ipt);
        $($($("#configEnsure").children("li")[12]).children("span")[1]).html(disk_type);
    });
    $("#tenacy_property").on("click",function () {
        var support_person=$("#support_person").val();
        var tel_number=$("#tel_number").val();
        var email_val=$("#email_val").val();
        var tenacy_time=$("#tenacy_time").val();
        var data_time=$("#data_time").val();
        var tenacy_date=tenacy_time+data_time;
        var checked=$("#data_remind").find("input").filter(":checked");
        var arr=[];
        checked.each(function () {
            var span=$(this).parents("li").children("span").html();
            arr.push(span);
        });

        var NOC=$("#NOC").val();
        var security_center=$("#security_center").val();
        var security_door=$("#security_door").val();
        var business=NOC+"-"+security_center+"-"+security_door;
        $($($("#configEnsure").children("li")[13]).children("span")[1]).html(support_person);
        $($($("#configEnsure").children("li")[14]).children("span")[1]).html(tel_number);
        $($($("#configEnsure").children("li")[15]).children("span")[1]).html(email_val);
        $($($("#configEnsure").children("li")[16]).children("span")[1]).html(tenacy_date);
        $($($("#configEnsure").children("li")[17]).children("span")[1]).html(arr[0]+"、"+arr[1]);
        $($($("#configEnsure").children("li")[18]).children("span")[1]).html(tenacy_date);
        $($($("#configEnsure").children("li")[18]).children("span")[1]).html(business);
    });
    var createVirtual = {
        data: {
            simpleData: {
                enable: true
            }
        },
        callback:{
            onClick:onExport
        }
    };
    function onExport(e,treeId,treeNode){
        var ztreeNodeName = treeNode.name;
        var nodeType = treeNode.type;
        var nodeId = treeNode.id;
        $("#ztreeNodeName").val(ztreeNodeName);
        $("#nodeId").val(nodeId);
        $("#nodeType").val(nodeType);
        if(nodeType == 'cluster'){
            var parentNode1 = treeNode.getParentNode();
            var parentNode0 = parentNode1.getParentNode();
            var allNodeName = parentNode0.name + '/'+parentNode1.name + '/' + ztreeNodeName;
            $("#addressIpt").val(allNodeName);
        }else{
            $("#addressIpt").val('');
        }

    };

    var FourzNodes = [
        {name:"vcenter01",open:true,iconOpen:"images/treeDiy/icon_vcenter.png", iconClose:"images/treeDiy/icon_vcenter.png", children:[
            {name:"Datacenter01", id: "01", type: "datacenter", open:true,iconOpen:"images/treeDiy/datacenter.png", iconClose:"images/treeDiy/datacenter.png",children:[
                {name:"cluster01", id: "001",type: "cluster", iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                    {name:"192.168.0.1",id: "0001",type: "host", icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
                {name:"cluster02",id: "001",type: "cluster",iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                    {name:"192.168.0.1",id: "0001",type: "host",icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
                {name:"cluster02",id: "001",type: "cluster",iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                    {name:"192.168.0.1",id: "0001",type: "host",icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
            ]},

        ]},
    ];
    $("#base_structure").on("change",function () {
        if($(this).val()=="Vmware"){
            FourzNodes=[
                {name:"vcenter02",open:true,iconOpen:"images/treeDiy/icon_vcenter.png", iconClose:"images/treeDiy/icon_vcenter.png", children:[
                    {name:"Datacenter01", id: "01", type: "datacenter", open:true,iconOpen:"images/treeDiy/datacenter.png", iconClose:"images/treeDiy/datacenter.png",children:[
                        {name:"cluster01", id: "001",type: "cluster", iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                            {name:"192.168.0.1",id: "0001",type: "host", icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
                        {name:"cluster02",id: "001",type: "cluster",iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                            {name:"192.168.0.1",id: "0001",type: "host",icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
                        {name:"cluster02",id: "001",type: "cluster",iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                            {name:"192.168.0.1",id: "0001",type: "host",icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
                    ]},

                ]},
            ];;
        }else{
            FourzNodes=[
                {name:"vcenter03",open:true,iconOpen:"images/treeDiy/icon_vcenter.png", iconClose:"images/treeDiy/icon_vcenter.png", children:[
                    {name:"Datacenter01", id: "01", type: "datacenter", open:true,iconOpen:"images/treeDiy/datacenter.png", iconClose:"images/treeDiy/datacenter.png",children:[
                        {name:"cluster01", id: "001",type: "cluster", iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                            {name:"192.168.0.1",id: "0001",type: "host", icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
                        {name:"cluster02",id: "001",type: "cluster",iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                            {name:"192.168.0.1",id: "0001",type: "host",icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
                        {name:"cluster02",id: "001",type: "cluster",iconOpen:"images/treeDiy/icon_cluster.png", iconClose:"images/treeDiy/icon_cluster.png",open:false,children:[
                            {name:"192.168.0.1",id: "0001",type: "host",icon:"images/treeDiy/icon_host1.png"},{name:"192.168.0.2",icon:"images/treeDiy/icon_host1.png"}]},
                    ]},

                ]},
            ];
        }
    })

    var treeObj = $.fn.zTree.getZTreeObj("FourTreeDemo");
    // var nodes = treeObj.getNodesByParam("name","资源管理");
    //位置绑定树
    $(document).on("click","#addressIpt",function (event) {
        zTreeObj = $.fn.zTree.init($("#FourTreeDemo"), createVirtual, FourzNodes);
        event.stopPropagation();
        $("#myAddress").toggle();
    });
});
//bootstrapValidator 验证
// 批量配置验证
function initFirstStepForm(){
    $('#firstStep').bootstrapValidator({
        message: 'this is null',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            virtualNumber: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 2,
                        message: '请填写1到99之间的数字'
                    }
                }
            },
            addressIpt: {
                message: '',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    }
                }
            },
            name_01: {
                message: '',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 10,
                        message: '请填写10位字符'
                    }
                }
            },
            name_02: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 2,
                        message: '请填写1到99之间的数字'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: '请输入正确的格式'
                    }
                }
            },
            CPU_he: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 2,
                        message: '请填写1到99之间的数字'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: '请输入正确的格式'
                    }
                }
            },
            memory_GB: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 2,
                        message: '请填写1到99之间的数字'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: '请输入正确的格式'
                    }
                }
            },

        }
    })
};
initFirstStepForm();
// 网络配置验证
function initSecondStepForm(){
    $('#secondStep').bootstrapValidator({
        message: 'this is null',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            IP_pre: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    regexp: {
                        regexp: /(1[0-9][0-9]\.)|(2[0-4][0-9]\.)|(25[0-5]\.)|([1-9][0-9]\.)|([0-9]\.)/,
                        message: '请输入正确的格式'
                    }
                }
            },
            IP_start: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 2,
                        message: '请填写1到99之间的数字'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: '请输入正确的格式'
                    }
                }
            },
            web_child: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    regexp: {
                        regexp: /((1[0-9][0-9]\.)|(2[0-4][0-9]\.)|(25[0-5]\.)|([1-9][0-9]\.)|([0-9]\.)){4}/,
                        message: '请输入正确的格式'
                    }
                }
            },
            gataway: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },
                    regexp: {
                        regexp: /(1[0-9][0-9]\.)|(2[0-4][0-9]\.)|(25[0-5]\.)|([1-9][0-9]\.)|([0-9]\.)/,
                        message: '请输入正确的格式'
                    }
                }
            },
            DNS_number: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    },

                    regexp: {
                        regexp: /(1[0-9][0-9]\.)|(2[0-4][0-9]\.)|(25[0-5]\.)|([1-9][0-9]\.)|([0-9]\.)/,
                        message: '请输入正确的格式'
                    }
                }
            },

        }
    })
};
initSecondStepForm();
//存储配置
function initThirdStepForm(){
    $('#thirdStep').bootstrapValidator({
        message: 'this is null',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            storage_ipt: {
                message: '请输入数字',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    }
                }

            }
        }
    })
};
initThirdStepForm();
//租期配置
function initFourthStepForm(){
    $('#fourthStep').bootstrapValidator({
        message: 'this is null',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            support_person: {
                message: '',
                validators: {
                    notEmpty: {
                        message: '必填项不能为空'
                    }
                }

            },
            email_val: {
                validators: {
                    notEmpty: {
                        message: '邮件不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮件地址如：123@qq.com'
                    }
                }
            },
            tel_number: {
                message: 'The phone is not valid',
                validators: {
                    notEmpty: {
                        message: '手机号码不能为空'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: '请输入11位手机号码'
                    },
                    regexp: {
                        regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                        message: '请输入正确的手机号码'
                    }
                }
            },
        }
    })
};
initFourthStepForm();
