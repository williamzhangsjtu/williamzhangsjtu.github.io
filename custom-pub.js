function showpub(opt){
	var pub = document.getElementsByClassName('pub');
	var conference = document.getElementsByClassName('pub-conference');
	var journal = document.getElementsByClassName('pub-journal');
	var preprint = document.getElementsByClassName('pub-preprint');
	for(var i=0; i<pub.length; i++)
		pub[i].style.display = 'none';
	
	for(var i=0; i<conference.length; i++){
		if(opt==0 || opt==1)
			$(conference[i]).fadeIn('slow');
	}
	for(var i=0; i<journal.length; i++){
		if(opt==0 || opt==2)
			$(journal[i]).fadeIn('slow');
	}
	for(var i=0; i<preprint.length; i++){
		if(opt==0 || opt==3)
			$(preprint[i]).fadeIn('slow');
	}
}