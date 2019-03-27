var html = '';

html += '<div id="popup" class="modal fade modal-middle"></div>';
html += '<div id="popup_alert" class="modal fade modal-middle"></div>';
html += '<div id="popup_confirm" class="modal fade modal-middle"></div>';
$('body').prepend(html);

function popup_alert(title, content, btn_close){
	var modal = $('#popup_alert');
	html = '';

	html += '<div class="modal-dialog modal-sm">';
	html += '<div class="modal-content">';
	html += '<div class="modal-header">';
	html += '<h4 class="modal-title">'+title+'</h4>';
	html += '</div>';
	html += '<div class="modal-body">'+content+'</div>';
	html += '<div class="modal-footer">';
	html += '<button id="cancel" type="button" class="btn btn-default btn-sm" data-dismiss="modal">'+btn_close+'</button>';
	html += '</div>';
	html += '</div>';
	html += '</div>';

	modal.modal('show');
	modal.html(html);

	if( $('body').width() >= 768 ){
		$('.modal-body').perfectScrollbar({
			wheelPropagation: false
		});
		$('.modal-body').find(".ps-scrollbar-y-rail").css({'border-radius':0,'margin-top':'0px','margin-bottom':'0px','margin-right':'-3px','background-color':'#ddd'});
		$('.modal-body').find(".ps-scrollbar-y").css({'opacity':1,'border-radius':0,'margin-top':'0px','margin-bottom':'0px','background-color':'#222d32'});
	}
}

function popup_confirm(title, size, content, btn_close, btn_submit){
	var modal = $('#popup_confirm');
	html = '';

	html += '<div class="modal-dialog '+size+'">';
	html += '<div class="modal-content">';
	html += '<div class="modal-header">';
	html += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
	html += '<h4 class="modal-title">'+title+'</h4>';
	html += '</div>';
	html += '<div class="modal-body">'+content+'</div>';
	html += '<div class="modal-footer">';
	html += '<button id="cancel" type="button" class="btn btn-default" data-dismiss="modal">'+btn_close+'</button>';
	html += '<button id="submit" type="button" class="btn btn-default">'+btn_submit+'</button>';
	html += '</div>';
	html += '</div>';
	html += '</div>';

	modal.modal('show');
	modal.html(html);

	if( $('body').width() >= 768 ){
		$('.modal-body').perfectScrollbar({
			wheelPropagation: false
		});
		$('.modal-body').find(".ps-scrollbar-y-rail").css({'border-radius':0,'margin-top':'0px','margin-bottom':'0px','margin-right':'-3px','background-color':'#ddd'});
		$('.modal-body').find(".ps-scrollbar-y").css({'opacity':1,'border-radius':0,'margin-top':'0px','margin-bottom':'0px','background-color':'#222d32'});
	}
}

function popup(title, size, content, btn_close, btn_submit){
	var modal = $('#popup');
	html = '';

	html += '<div class="modal-dialog '+size+'">';
	html += '<div class="modal-content">';
	html += '<div class="modal-header">';
	html += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
	html += '<h4 class="modal-title">'+title+'</h4>';
	html += '</div>';
	html += '<div class="modal-body">'+content+'</div>';
	html += '<div class="modal-footer">';
	html += '<button id="cancel" type="button" class="btn btn-default primary" data-dismiss="modal">'+btn_close+'</button>';
	html += '<button id="submit" type="button" class="btn btn-default primary">'+btn_submit+'</button>';
	html += '</div>';
	html += '</div>';
	html += '</div>';

	modal.modal('show');
	modal.html(html);

	if( $('body').width() >= 768 ){
		$('.modal-body').perfectScrollbar({
			wheelPropagation: false
		});
		$('.modal-body').find(".ps-scrollbar-y-rail").css({'border-radius':0,'margin-top':'0px','margin-bottom':'0px','margin-right':'-3px','background-color':'#ddd'});
		$('.modal-body').find(".ps-scrollbar-y").css({'opacity':1,'border-radius':0,'margin-top':'0px','margin-bottom':'0px','background-color':'#222d32'});
	}
}

$('#popup, #popup_confirm, #popup_alert').on('hidden.bs.modal', function (e) {
	var modal = $(this)
	modal.find('.modal-header').show();
	modal.find('.modal-dialog').removeClass('modal-lg')
	modal.find('.modal-dialog').removeClass('modal-sm')
	modal.find('.modal-title').html('')
	modal.find('.modal-body').html('')
	modal.find('.modal-footer button#submit').html('Simpan').show()
	modal.find('.modal-footer').show()
});