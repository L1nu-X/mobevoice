#!/usr/bin/perl
print "Content-type:text/html\n\n";
#use CGI::Carp qw(fatalsToBrowser); # To Debug on Browsers
require "include.cgi";
use DBI;
use CGI;
use utf8;
use Encode;

#if ($app{session_status} ne 1) {cgi_redirect("index.cgi");exit;}
if (&active_user_permission_check("noc:can_view_reports") ne 1) {adm_error("no permission"); exit;}
use Data::Dumper;

if (&active_user_permission_check("noc:profile_edit") ne 1) {adm_error("no permission"); exit;}
$cgi = new CGI;



if(defined($form{'msg_type'}) && defined($form{'lang_id'})){
	

	my $sth = "";
	my $msg_type=$form{'msg_type'};
	my $language_id = $form{'lang_id'};

	$sth = $database->prepare("select * from sms_messages where language_id ='$language_id' and message_type = '$msg_type'");
	$sth->execute();
	my $ref = $sth->fetchrow_hashref();
	my $id = "$ref->{id}";
	my $lang_id = "$ref->{language_id}";
	my $messages = "$ref->{messages}";
	$messages = encode("utf8" ,$messages);
	my $message_type = "$ref->{message_type}";
	
	print $messages."&*&#".$lang_id;

}else{
	print "nothing";
}



	

