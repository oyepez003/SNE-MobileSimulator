/*!
 * MobileSimulator-SNE
 * http://sne.yepsua.com/
 *
 * Copyright 2005, 2012 YepSua Team.
 * Released under the MIT license
 */
$(function(){
	simulatorStyle = $("#cboSimulatorStyle").on('change', function(){
		setSimulatorStyle();
	});
	
	orientation = $("#cboOrientation").on('change', function(){
		setSimulatorStyle();
	});
	
	$('#btnIFrmSrc').on('click',function(e){
		if(confirm("Do you Want to change the simulator's page?")){
			$('#simulatorPage').attr('src', $('#txtIFrmSrc').val());
		}
		e.preventDefault();
		return false;
	});
	
});

function setSimulatorStyle(){
	var styleClass;
	styleClass = simulatorStyle.val() + '-' + orientation.val();
	$('#simulator_aio').removeClass();
	$('#simulator_aio').addClass('simulator ' + styleClass);
}