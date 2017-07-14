$(function(){
	$(".tabs-list li").click(function(){
		$(this).addClass('tabs-active');
		$(this).siblings().removeClass("tabs-active");
		var idName=$(this).parent().parent().parent("div").attr("id");
		var liHtml=$(this).html();
		$("#contentTitle").children("span:last-child").html("&gt"+liHtml);
		if(idName=="vcenter"&&liHtml=="监控"){
            $("#gailan").hide();
            $("#jiankong").show();
            $("#controlChild").show();
            initMonitorChart();
            initMainTop10Chart();
        }else if(idName=="vcenter"&&liHtml=="概览"){
            $("#gailan").show();
            $("#jiankong").hide();
            $("#controlChild").hide();
            $("#dataStorageTop10").hide();
        }else if(idName=="controlChild"&&liHtml=="主机TOP10"){
            $("#mainTop10").show();
            initMainTop10Chart();
            $("#virtualTop10").hide();
            $("#dataStorageTop10").hide();
            $("#websiteTop10").hide();
        }else if(idName=="controlChild"&&liHtml=="虚拟机TOP10"){
            $("#mainTop10").hide();
            $("#virtualTop10").show();
            $("#websiteTop10").hide();
            $("#dataStorageTop10").hide();
            initVirtualTop10Chart();
        }else if(idName=="controlChild"&&liHtml=="数据存储TOP10"){
            $("#mainTop10").hide();
            $("#virtualTop10").hide();
            $("#dataStorageTop10").show();
            $("#websiteTop10").hide();
            dataStorageTop10Chart();
        }else if(idName=="controlChild"&&liHtml=="网络TOP10"){
            $("#mainTop10").hide();
            $("#virtualTop10").hide();
            $("#dataStorageTop10").hide();
            $("#websiteTop10").show()
            websiteTop10Chart();
        }else if(idName=="Datacenter01"&&liHtml=="监控"){
            $("#Datacenter01_overview").hide();
            $("#Datacenter01_monitor").show();
            initColonyChart();
        }else if(idName=="Datacenter01"&&liHtml=="概览"){
            $("#Datacenter01_overview").show();
            $("#Datacenter01_monitor").hide();
        }else if(idName=="cluster01"&&liHtml=="概览"){
            $("#cluster01_overview").show();
            $("#cluster01_monitor").hide();
        }else if(idName=="cluster01"&&liHtml=="监控"){
            $("#cluster01_overview").hide();
            $("#cluster01_monitor").show();
            initClusterChart();
        }else if(idName=="IP192"&&liHtml=="概览"){
            $("#IP_overview").show();
            $("#IP_monitor").hide();
        }else if(idName=="IP192"&&liHtml=="监控"){
            $("#IP_overview").hide();
            $("#IP_monitor").show();
             initIPChart()
        }else if(idName=="testvm"&&liHtml=="概览"){
            $("#testvm_overview").show();
            $("#testvm_monitor").hide();
        }else if(idName=="testvm"&&liHtml=="监控"){
            $("#testvm_overview").hide();
            $("#testvm_monitor").show();
            initTestvmChart();
        }
	})
	var middleheight=$("#middle-height").outerHeight();
	$("#setheight").outerHeight(middleheight);
	$(".hdalert i").hover(function(){
		$(this).next(".hoverTitle").show();
	},function(){
		$(this).next(".hoverTitle").hide();
	});
  $(".delete").click(function(){      
    if(true ==$(".collapse-table input[name='box']").parent().hasClass('checked')){
          function check(){  
            swal(  
                {title:"",  
                text:"删除后将无法恢复，请谨慎操作！",  
                type:"warning",  
                showCancelButton:true,  
                confirmButtonColor:"#118ff5",  
                confirmButtonText:"确认",  
                cancelButtonText:"取消",  
                closeOnConfirm:false,  
                closeOnCancel:false  
                },  
                function(isConfirm)
                {  
                    if(isConfirm)  
                    {  
                        swal({title:"",  
                            text:"您已经永久删除了这条信息。",  
                            type:"success"},function(){
                              $(".collapse-table input[name='box']:checkbox").each(function(){
                                  if(true == $(this).is(':checked')){
                                    $(this).parents("tr").remove();
                                  }
                                })
                              $('input').iCheck('uncheck');
                            })  
                    }  
                    else{  
                        swal({title:"",  
                            text:"您取消了删除操作！",  
                            type:"error"})  
                    }  
                }  
                )  
          }  
          check();
    }  
  })

  //编辑用户
  $(".chooseModal").change(function(){
    if($(this).val()=="编辑"){
      $('#edit').modal('toggle');
    }
  })
  //编辑角色
  $(".chooseModal1").change(function(event){
    if($(this).val()=="编辑"){
      $('#editrole').modal('toggle');
    }else if($(this).val()=="管理用户"){
      $('#edituser').modal('toggle');
    }
  })
  $(".chooseModal1").click(function(event){
    event.stopPropagation();
  })
  //select
    //移到右边
    $('#add').click(function() {
    //获取选中的选项，删除并追加给对方
        $('#select1 option:selected').appendTo('#select2');
    });
    //移到左边
    $('#remove').click(function() {
        $('#select2 option:selected').appendTo('#select1');
    });
    //全部移到右边
    $('#add_all').click(function() {
        //获取全部的选项,删除并追加给对方
        $('#select1 option').appendTo('#select2');
    });
    //全部移到左边
    $('#remove_all').click(function() {
        $('#select2 option').appendTo('#select1');
    });
    //双击选项
    $('#select1').dblclick(function(){ //绑定双击事件
        //获取全部的选项,删除并追加给对方
        $("option:selected",this).appendTo('#select2'); //追加给对方
    });
    //双击选项
    $('#select2').dblclick(function(){
       $("option:selected",this).appendTo('#select1');
    });
    //表格点击
    $("#eventTable tr").click(function(){
      $("#details").html('');
      $(this).addClass("bg-b7e");
      $(this).siblings("tr").removeClass("bg-b7e");
      var item1=$($(this).children("td")[1]).html();
      var item2=$($(this).children("td")[2]).html();
      var htmls='<div class="fw mb-10">'+'角色信息'+'</div>'+
                '<div>'+
                '<span>角色ID：</span>'+
                '<span>'+item1+'</span>'+
                '</div>'+
                '<div>'+
                '<span>角色名称：</span>'+
                '<span>'+item2+'</span>'+
                '</div>'+
                '<div>'+
                '<span>角色说明：</span>'+
                '<span>'+"超级管理员具备系统所有应用权限"+'</span>'+
                '</div>'+
                '<div class="border-bottom pb-10">'+
                '</div>'+
                '<div>'+
                '<div class="fw mt-10">'+'角色权限'+'</div>'+
                '<div id="mytreeDemo2" class="myztree">'+'</div>'
    $("#details").html(htmls);
    })
    //添加STACK
    $("#inforchoice").change(function(){
      var $value=$(this).val();
      var codes='<div class="form-group" id="codes">'+
          '<label class="col-sm-4 control-label">'+"API端口"+'</label>'+
          '<div class="col-sm-8">'+
          '<input type="text" class="form-control" placeholder="" name="inforshow">'+
          '</div>'+
          '</div>';
      var apicode='<div class="form-group" id="api">'+
          '<label class="col-sm-4 control-label">'+"API端口"+'</label>'+
          '<div class="col-sm-8">'+
          '<input type="text" class="form-control" placeholder="" name="inforshow">'+
          '</div>'+
          '</div>';
      switch($value)
      {
        case 'OpenStack':
        if($("#codes label").html()==undefined){
          $("#apibefore").before(apicode);
          $("#formGroup1").after(codes);
        break;
        }
        case 'Vmware vcenter':
        $("#codes").remove();
        $("#api").remove();
        break;
      }    
    });
    //右键弹窗单击事件
    $("#rMenu li,#rMenu1 li,#rMenu2 li,#rMenu3 li,#rMenu4 li").click(function(event){
        if($(this).html()!="添加设备"){
            event.stopPropagation();
            $(".treeRightMenu").hide();
        };
        var xdist=event.pageX;
        var ydist=event.pageY;
        var html=$(this).html();
        if(html=="重命名"){
          $('#rename').modal('toggle');
          $('#rename input').attr("value",nodeName);     
        }else if(html=="添加基础架构"){
            event.stopPropagation();
          $('#addStack').modal('toggle');
        }else if(html=="添加设备"){
            event.stopPropagation();
          $("#rMenu4").show();
          $("#rMenu4").css({"top":ydist-130,"left":xdist-20});
        }else if(html=="添加机房"){
            event.stopPropagation();
          $("#addRoom").modal("toggle");
        }else if(html=="添加数据中心"){
            event.stopPropagation();
          $("#addData").modal("toggle");
        }else if(html=="添加机柜"){
            event.stopPropagation();
          $("#addCabinets").modal("toggle");
        }else if(html=="X86服务器"){
            event.stopPropagation();
          $("#addServer").modal("toggle");
        }else if(html=="添加基础架构"){
            event.stopPropagation();
          $("#addStack").modal("toggle");
        }else if(html=="创建虚拟机"){
            event.stopPropagation();
            $("#createVirtual").modal("toggle");
        }
    });
    $('#rename').on('shown.bs.modal',function(){
      $('#nameText').focus().select();
    })


    //  机柜
    $(".equipImage a").click(function () {
        $(this).parent("li").addClass("equipActive");
        $(this).parent("li").children("a:last-child").addClass("c-009");
        $(this).parent("li").siblings("li").removeClass("equipActive");
        $(this).parent("li").siblings("li").children("a:last-child").removeClass("c-009");
        if($(this).parent("li").children("a:last-child").html().indexOf("DELL")!=-1){
            $("#DELL").show();
            $("#IBM").hide();
        }else{
            $("#DELL").hide();
            $("#IBM").show();
        }
    });
    //Datacenter集群和存储器
    $(".storageStyle").change(function () {
        var selectVal=$(this).val();
        if(selectVal=="存储器"){
            $("#storageChart").show();
            $("#colony").hide();
            initStorageChart();
        }else{
            $("#storageChart").hide();
            $("#colony").show();
            initColonyChart();
        }
    });
    //更多虚机管理
    $("#moreManaBtn").on("click",function () {
        $("#testvm_manaBtn").toggle();
    });
    $("#moreManaBtn1").on("click",function () {
        $("#testvm_manaBtn1").toggle();
    })
    //虚机管理点击
    $("#testvm_manaBtn li,.manaBtn li").on("click",function () {
        $(this).children("")
    })
    //模态框弹窗必须取消或者x掉才能消失
    $(".modal").modal({
      backdrop:'static',
       keyboard: false,
       show:false
    })
    //迁移模态框
    $("#transfer .modal-footer .MN").each(function() {
        $(this).click(function() {
            if ($(this).hasClass("MN-next")) {
                $("#transfer .carousel").carousel('next');
                $("#transfer .step li.active").next().addClass("active");
            } else {
                $("#transfer .carousel").carousel('prev');
                if ($("#transfer .step li").length > 1) {
                    $($($("#transfer .step li.active"))[$("#transfer .step li.active").length - 1]).removeClass("active")
                }
                var treeObj = $.fn.zTree.getZTreeObj("ThirdTreeDemo");
                treeObj.cancelSelectedNode();
            };
            if($($(".breedList").children("li")[1]).hasClass("active")){
                $(".MN-pre").show();
                $(".tipFirst").show();
                $(".MN-next").addClass("btn-default");
                $(".MN-next").removeClass("btn-primary");
                $(".MN-next").attr("disabled","disabled");
            }else{
                $(".MN-pre").hide();
                $(".tipFirst").hide();
                $(".MN-next").addClass("btn-primary");
                $(".MN-next").removeClass("btn-default");
                $(".MN-next").removeAttr("disabled");
            };
            if($($("#breedList").children("li")[2]).hasClass("active")){
                $("#ensureBtn").show();
                $(".MN-next").hide();
                $(".tipFirst").hide();
                $(".tipSecond").show();
            }else{
                $("#ensureBtn").hide();
                $(".MN-next").show();
                $(".tipSecond").hide();
            };
        })
    });
    $(".transfer").click(function (event) {
        event.stopPropagation();
        $("#rMenuVirtualMana").hide();
        $("#transfer").modal("toggle");
    })
    //点击全局消失弹窗
    $(document).on("click",function () {
        $(".treeRightMenu").hide();
        //$("#myAddress").hide();
    });
    //维保日期清除
    $("#data_remove").on("click",function () {
       $(this).parent().children("input").val("");
    })
    //模态框关闭初始化
    $('.modal').on('hidden.bs.modal', function (e) {
        $(".breedList").children("li").removeClass("active");
        $($(".breedList").children("li")[0]).addClass("active");
        $(".item").removeClass("active");
        $($(".item")[0]).addClass("active");
        var len=document.getElementsByClassName("myForm");
        for(var i=0;i<len.length;i++){
            len[i].reset();
        }
    })

})

























