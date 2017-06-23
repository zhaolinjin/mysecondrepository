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
        }else if(idName=="Datacenter01"&&liHtml=="概览"){
            $("#Datacenter01_overview").show();
            $("#Datacenter01_monitor").hide();
        }
	})
	var middleheight=$("#middle-height").outerHeight();
	$("#setheight").outerHeight(middleheight);
	$(".hdalert i").hover(function(){
		$(this).next(".hoverTitle").show();
	},function(){
		$(this).next(".hoverTitle").hide();
	});
	//icheck复选框
  $('input[type=checkbox]').iCheck({
        checkboxClass: 'icheckbox_square-green'
    });
    $('input[type=radio]').iCheck({
        radioClass: 'iradio_square-green'
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
    $("#rMenu li,#rMenu1 li,#rMenu2 li,#rMenu3 li,#rMenu4 li").click(function(event){
        if($(this).html()!="添加设备"){
            $(".treeRightMenu").hide();
        };
        var xdist=event.pageX;
        var ydist=event.pageY;
        var html=$(this).html();
        if(html=="重命名"){
          $('#rename').modal('toggle');
          $('#rename input').attr("value",nodeName);     
        }else if(html=="添加基础架构"){
          $('#addStack').modal('toggle');
        }else if(html=="添加设备"){
          $("#rMenu4").show();
          $("#rMenu4").css({"top":ydist-130,"left":xdist-20});
        }else if(html=="添加机房"){
          $("#addRoom").modal("toggle");
        }else if(html=="添加数据中心"){
          $("#addData").modal("toggle");
        }else if(html=="添加机柜"){
          $("#addCabinets").modal("toggle");
        }else if(html=="X86服务器"){
          $("#addServer").modal("toggle");
        }else if(html=="添加基础架构"){
          $("#addStack").modal("toggle");
        }else if(html=="创建虚拟机"){
            $("#createVirtual").modal("toggle");
        }
    });
    $('#rename').on('shown.bs.modal',function(){
      $('#nameText').focus().select();
    })

    $(".btn-sm").hover(function(){
      $(this).css("background-color","#1591f5")
      $(this).children("i").addClass("c-white");
      $(this).parent().siblings().children("button").children("i").removeClass("c-white");
      $(this).parent().siblings().children("button").css("background-color","#e5e5e5");
    });
    //创建虚拟机中的icheck
    $("#configChoice").on("ifChanged",function(){
      if($(this).is(":checked")){
          //不可编辑
          $("#address").show();
          $("#sameConfig").show();        
      }else{
          $("#sameConfig").hide();
          $("#address").hide();
      }
    });
    //虚拟机创建步骤
    $("#createVirtual .modal-footer .MN").each(function() {
      var len=$("#createVirtual .step li").length;
          $(this).click(function() {
              if($("#number").val()<=0){
                  alert("数量必须大于0")
              }
            if ($(this).hasClass("MN-next")&&$("#number").val()>0) {
                  if($("#createVirtual .step li.active").index()==len-2&&$("#sum").html()==0){
                      alert("不能全部删除，返回上一步重新操作！");
                  }else{
                      $("#createVirtual .carousel").carousel('next');
                      $("#createVirtual .step li.active").next().addClass("active");
                      $("#createVirtual .step li.active").prev().removeClass("active");
                      var indexVal=$("#createVirtual .step li.active").index();
                      if(indexVal==len-2&&$("#configChoice").is(":checked")){
                          $("#privateMake").children("tr").remove();
                          var lens=$("#number").val();
                          create(lens);
                      }else if(indexVal==len-2&&$("#configChoice").is(":checked")==false){
                          $("#privateMake").children("tr").remove();
                          var lens=$("#number").val();
                          create_1(lens);
                      };
                      if(indexVal==len-1){
                        $("#ensure").show();
                        $(".MN-next").hide();
                      }else{
                          $(".MN-next").show();
                        $(".MN-pre").show();
                      }
                  }
            } else {
              $("#createVirtual .carousel").carousel('prev');
                $("#createVirtual .step li.active").prev().addClass("active");
                $($("#createVirtual .step li.active")[1]).removeClass("active");
                var indexVal=$("#createVirtual .step li.active").index();
                if(indexVal!=len-1){
                    $(".MN-next").show();
                    $("#ensure").hide();
                }
            }
          })
    });
    $("#ensure").click(function () {
        alert()
    })
    //创建虚拟机里的添加
    var lensum=$("#number").val();
    $("#addPrivate").on("click",function () {
        if($("#configChoice").is(":checked")){
            //对表单value重新赋值
            $("#privateMake").append($("#privateMake tr:last-child").clone(true));
            var firstTd=$("#privateMake tr:last-child ").find("td:first-child").clone(true);
            var firstValue=$("#privateMake tr:last-child ").find("td:first-child input").val();
            var num=parseInt(firstValue.replace(/[^0-9]/ig,""));
            num++;
            var string=firstValue.replace(/[0-9]/ig,"");
            var newName=string+num;
            $("#privateMake tr:last-child ").find("td:first-child input").val(newName);
            var ipTd=$("#privateMake tr:last-child ").find("td:nth-child(7)");
            var ipValue=$("#privateMake tr:last-child ").find("td:nth-child(7) input").val();
            var ipArray=ipValue.split(".");
            var last=++ipArray[3];
            var newIp=ipArray[0]+"."+ipArray[1]+"."+ipArray[2]+"."+last;
            $("#privateMake tr:last-child ").find("td:nth-child(7) input").val(newIp);
            $("#sum").html($("#privateMake tr").length);
        }else{
            $("#privateMake").append($("#privateMake tr:last-child").clone(true));
            $("#sum").html($("#privateMake tr").length);
        }
    })
    //动态创建相同配置虚拟机
    function create(lens) {
        var name_1=$("#name_1").val();
        var name_2=$("#name_2").val();
        var ip_1=$("#ip_1").val();
        var ip_2=$("#ip_2").val();
        var location=$("#location").val();
        var cpuVal=$("#cpuVal").val();
        var memory=$("#memory").val();
        var storage=$("#storage").val();
        var volume=$("#volume").val();
        var website=$("#website").val();
        for(var i=0;i<lens;i++){
          var codes='<tr>'+
                    '<td>'+
                        '<input type="text" value="'+name_1+name_2 +'" disabled="disabled">'+
                    '</td>'+
                    '<td class="inputNumber-relative">'+
                        '<input class="input-style inputNumber" type="number" name="number" value="'+cpuVal+'" min="0" step="3" style="width: 60px" disabled="disabled">'+"&nbsp;&nbsp;"+"核"+
                    '</td>'+
                    '<td >'+
                        '<input class="input-style inputNumber" type="number" name="number" value="'+memory+'" min="0" step="3" style="width: 60px" disabled="disabled">'+"&nbsp;&nbsp;"+"G"+
                    '</td>'+
                    '<td>'+
                        '<select style="width: 100px;background:#ebebe3" disabled="disabled">'+
                            '<option>'+storage+'</option>'+
                        '</select>'+
                    '</td>'+
                    '<td >'+
                        '<input class="input-style inputNumber" type="number" name="number" value="'+volume+'" min="0" step="3" style="width: 60px" disabled="disabled">'+"&nbsp;&nbsp;"+"G"+
                    '</td>'+
                    '<td>'+
                        '<select style="width: 100px;background:#ebebe3" disabled="disabled">'+
                            '<option>'+website+'</option>'+
                        '</select>'+
                    '</td>'+
                    '<td>'+
                        '<input type="text" value="'+ip_1+ip_2+'" disabled="disabled">'+
                    '</td>'+
                    '<td style="padding-left: 0">'+
                        '<select style="width: 170px;padding-left: 0;background:#ebebe3" disabled="disabled">'+
                            '<option>'+location+'</option>'+
                        '</select>'+
                    '</td>'+
                    '<td>'+
                        '<i class="glyphicon glyphicon-trash mt-8 pointer"></i>'+
                    '</td>'
                    '</tr>';
                $("#privateMake").append(codes);
                name_2++;
                ip_2++;

        }
        //创建虚拟机里的删除
        $("#privateMake td:last-child i").on("click",function () {
            $(this).parents("tr").remove();
            $("#sum").html($("#privateMake tr").length)
        })
        //合计台数
        $("#sum").html($("#privateMake tr").length);
    }
    //动态创建不同配置虚拟机
    function create_1(lens) {
        var location=$("#location").val();
        var storage=$("#storage").val();
        var website=$("#website").val();
        for(var i=0;i<lens;i++){
          var codes='<tr>'+
                    '<td>'+
                        '<input type="text" value="">'+
                    '</td>'+
                    '<td class="inputNumber-relative">'+
                        '<input class="input-style inputNumber" type="number" name="number" value="" min="0" step="3" style="width: 60px">'+"&nbsp;&nbsp;"+"核"+
                    '</td>'+
                    '<td >'+
                        '<input class="input-style inputNumber" type="number" name="number" value="" min="0" step="3" style="width: 60px">'+"&nbsp;&nbsp;"+"G"+
                    '</td>'+
                    '<td>'+
                        '<select style="width: 100px;">'+
                            '<option>'+storage+'</option>'+
                        '</select>'+
                    '</td>'+
                    '<td >'+
                        '<input class="input-style inputNumber" type="number" name="number" value="" min="0" step="3" style="width: 60px">'+"&nbsp;&nbsp;"+"G"+
                    '</td>'+
                    '<td>'+
                        '<select style="width: 100px;">'+
                            '<option>'+website+'</option>'+
                        '</select>'+
                    '</td>'+
                    '<td>'+
                        '<input type="text" value="">'+
                    '</td>'+
                    '<td style="padding-left: 0">'+
                        '<select style="width: 170px;padding-left: 0;">'+
                            '<option>'+location+'</option>'+
                        '</select>'+
                    '</td>'+
                    '<td>'+
                        '<i class="glyphicon glyphicon-trash mt-8 pointer"></i>'+
                    '</td>'
                    '</tr>';
                $("#privateMake").append(codes);
                name_2++;
                ip_2++;

        }
        //创建虚拟机里的删除
        $("#privateMake td:last-child i").on("click",function () {
            $(this).parents("tr").remove();
            $("#sum").html($("#privateMake tr").length)
        })
        //合计台数
        $("#sum").html($("#privateMake tr").length);
    }
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
})





























