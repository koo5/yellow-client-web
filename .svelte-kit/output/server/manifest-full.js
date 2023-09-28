export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["content/1.avif","content/10.avif","content/11.avif","content/12.avif","content/13.avif","content/14.avif","content/15.jpg","content/16.jpg","content/2.avif","content/3.avif","content/4.avif","content/5.avif","content/6.avif","content/7.avif","content/8.avif","content/9.avif","content/animated.json","content/c-obrazek.jpeg","content/c-obrazek2.jpeg","content/c-poster.png","content/c1.jpg","content/c2.jpg","content/c3.jpg","content/obrazek.jpeg","content/obrazek2.jpeg","content/poster.png","content/poster2.jpeg","content/pr1.jpg","content/pr2.jpg","content/pr3.jpg","content/pr4.jpg","content/pr5.jpg","content/pr6.jpg","content/pv1.jpg","content/pv10.jpg","content/pv11.jpg","content/pv12.jpg","content/pv2.jpg","content/pv3.jpg","content/pv4.jpg","content/pv5.jpg","content/pv6.jpg","content/pv7.jpg","content/pv8.jpg","content/pv9.jpg","content/reels.zip","content/travolta.gif","content/video.mp4","content/voicemessage.ogg","content/yellow2.mp4","css/main.css","css/style.css","favicon.svg","fonts/Ubuntu-Bold.ttf","fonts/Ubuntu-BoldItalic.ttf","fonts/Ubuntu-Italic.ttf","fonts/Ubuntu-Light.ttf","fonts/Ubuntu-LightItalic.ttf","fonts/Ubuntu-Medium.ttf","fonts/Ubuntu-MediumItalic.ttf","fonts/Ubuntu-Regular.ttf","html/temp-conversation.html","html/temp-message.html","img/background/doodle.png","img/icons/attachment.svg","img/icons/call.svg","img/icons/calls.svg","img/icons/caret-down-black.svg","img/icons/caret-down.svg","img/icons/caret-up-black.svg","img/icons/caret-up.svg","img/icons/contacts.svg","img/icons/dots.svg","img/icons/emoji.svg","img/icons/icn_pause.svg","img/icons/icn_play.svg","img/icons/icn_playb.svg","img/icons/icn_playn.svg","img/icons/icn_tick3.svg","img/icons/icon-93.svg","img/icons/icon_account.svg","img/icons/icon_account_filled.svg","img/icons/icon_add.svg","img/icons/icon_add_filled.svg","img/icons/icon_administrators.svg","img/icons/icon_administrators_filled.svg","img/icons/icon_alias.svg","img/icons/icon_alias_filled.svg","img/icons/icon_attachment.svg","img/icons/icon_attachment_filled.svg","img/icons/icon_back.svg","img/icons/icon_calendar.svg","img/icons/icon_calendar_filled.svg","img/icons/icon_calendar_n.svg","img/icons/icon_call.svg","img/icons/icon_call_a.svg","img/icons/icon_call_filled.svg","img/icons/icon_calls.svg","img/icons/icon_calls_filled.svg","img/icons/icon_cam.svg","img/icons/icon_caret_right.svg","img/icons/icon_chat.svg","img/icons/icon_chatbot.svg","img/icons/icon_chatbot_filled.svg","img/icons/icon_comment.svg","img/icons/icon_contacts.svg","img/icons/icon_contacts_filled.svg","img/icons/icon_dislike.svg","img/icons/icon_dislike_b.svg","img/icons/icon_domains.svg","img/icons/icon_domains_filled.svg","img/icons/icon_donations.svg","img/icons/icon_donations_filled.svg","img/icons/icon_donations_n.svg","img/icons/icon_donations_n_d.svg","img/icons/icon_download.svg","img/icons/icon_edit.svg","img/icons/icon_edit_filled.svg","img/icons/icon_emoji_filled.svg","img/icons/icon_encryption.svg","img/icons/icon_encryption_filled.svg","img/icons/icon_event.svg","img/icons/icon_event_filled.svg","img/icons/icon_event_n.svg","img/icons/icon_event_n_d.svg","img/icons/icon_eye.svg","img/icons/icon_file.svg","img/icons/icon_file_filled.svg","img/icons/icon_file_image.svg","img/icons/icon_file_image_filled.svg","img/icons/icon_file_n.svg","img/icons/icon_file_sharing.svg","img/icons/icon_file_sharing_filled.svg","img/icons/icon_file_sharing_n.svg","img/icons/icon_file_video.svg","img/icons/icon_file_video_filled.svg","img/icons/icon_filter.svg","img/icons/icon_filter_filled.svg","img/icons/icon_folders.svg","img/icons/icon_folders_filled.svg","img/icons/icon_follow.svg","img/icons/icon_forw.svg","img/icons/icon_forward.svg","img/icons/icon_forward_filled.svg","img/icons/icon_hangup.svg","img/icons/icon_hangup_n.svg","img/icons/icon_help.svg","img/icons/icon_help_filled.svg","img/icons/icon_help_n.svg","img/icons/icon_help_n_d.svg","img/icons/icon_horus.svg","img/icons/icon_info.svg","img/icons/icon_info_filled.svg","img/icons/icon_language.svg","img/icons/icon_language_filled.svg","img/icons/icon_ld_arrow.svg","img/icons/icon_ld_arrow_out.svg","img/icons/icon_ld_arrow_r.svg","img/icons/icon_ld_arrow_r_out.svg","img/icons/icon_like.svg","img/icons/icon_like_b.svg","img/icons/icon_live.svg","img/icons/icon_live_filled.svg","img/icons/icon_live_stream.png","img/icons/icon_login.svg","img/icons/icon_login_filled.svg","img/icons/icon_logout.svg","img/icons/icon_logout_filled.svg","img/icons/icon_map_pin.svg","img/icons/icon_map_pin_filled.svg","img/icons/icon_map_pin_n.svg","img/icons/icon_message_n_d.svg","img/icons/icon_message_template.svg","img/icons/icon_message_template_filled.svg","img/icons/icon_micro.svg","img/icons/icon_micro_mute.svg","img/icons/icon_micro_n.svg","img/icons/icon_nemp_v1.svg","img/icons/icon_nemp_v1_filled.svg","img/icons/icon_nemp_v2.svg","img/icons/icon_nemp_v2_filled.svg","img/icons/icon_nemp_v3.svg","img/icons/icon_nemp_v3_filled.svg","img/icons/icon_nemp_v4.svg","img/icons/icon_nemp_v4_filled.svg","img/icons/icon_nemp_v5.svg","img/icons/icon_nemp_v5_filled.svg","img/icons/icon_new_account.svg","img/icons/icon_new_account_filled.svg","img/icons/icon_new_chat.svg","img/icons/icon_new_chat_filled.svg","img/icons/icon_new_conversation.svg","img/icons/icon_new_conversation_filled.svg","img/icons/icon_newsfeed.svg","img/icons/icon_newsfeed_d.svg","img/icons/icon_newsfeed_filled.svg","img/icons/icon_not_secure.svg","img/icons/icon_not_secure_filled.svg","img/icons/icon_pause.svg","img/icons/icon_pause_filled.svg","img/icons/icon_play.svg","img/icons/icon_play_filled.svg","img/icons/icon_play_out.svg","img/icons/icon_play_out_d.svg","img/icons/icon_received.svg","img/icons/icon_remove-109.svg","img/icons/icon_remove-25.svg","img/icons/icon_remove_filled-110.svg","img/icons/icon_remove_filled-26.svg","img/icons/icon_reply.svg","img/icons/icon_reply_filled.svg","img/icons/icon_rt_arrow.svg","img/icons/icon_rt_arrow_out.svg","img/icons/icon_rt_arrow_r.svg","img/icons/icon_rt_arrow_r_out.svg","img/icons/icon_saved_messages.svg","img/icons/icon_saved_messages_filled.svg","img/icons/icon_screen_share.svg","img/icons/icon_search.svg","img/icons/icon_search_filled.svg","img/icons/icon_secured.svg","img/icons/icon_secured_filled.svg","img/icons/icon_security.svg","img/icons/icon_security_filled.svg","img/icons/icon_send.svg","img/icons/icon_send_filled.svg","img/icons/icon_settings.svg","img/icons/icon_settings_filled.svg","img/icons/icon_share.svg","img/icons/icon_sort_downwards.svg","img/icons/icon_sort_upwards.svg","img/icons/icon_sounds.svg","img/icons/icon_sounds_filled.svg","img/icons/icon_statistic.svg","img/icons/icon_statistic_filled.svg","img/icons/icon_sticker.svg","img/icons/icon_sticker_filled.svg","img/icons/icon_subscribe.svg","img/icons/icon_task.svg","img/icons/icon_task_filled.svg","img/icons/icon_task_n.svg","img/icons/icon_test_svg","img/icons/icon_theme.svg","img/icons/icon_theme_filled.svg","img/icons/icon_translate.svg","img/icons/icon_users.svg","img/icons/icon_users_filled.svg","img/icons/icon_video_meeting.svg","img/icons/icon_video_meeting_filled.svg","img/icons/icon_video_message.svg","img/icons/icon_video_message_filled.svg","img/icons/icon_videocall.svg","img/icons/icon_videocall_filled.svg","img/icons/icon_voice_message.svg","img/icons/icon_voice_message_filled.svg","img/icons/icons8-close.svg","img/icons/icons8-menu.svg","img/icons/icons8-plus.svg","img/icons/icons8_closeb.svg","img/icons/marker.png","img/icons/marker.svg","img/icons/marker2.svg","img/icons/menu.svg","img/icons/new_chat.svg","img/icons/new_conversation.svg","img/icons/newsfeed.svg","img/icons/received.svg","img/icons/saved_messages.svg","img/icons/search.svg","img/icons/secure_yes.svg","img/icons/send.svg","img/icons/send_black.svg","img/icons/settings.svg","img/icons/social/icons8-facebook-messenger.svg","img/icons/social/icons8-instagram.svg","img/icons/social/icons8-slack-new.svg","img/icons/social/icons8-telegram-app.svg","img/icons/social/icons8-whatsapp.svg","img/icons/tick3.svg","img/icons/tick4.svg","img/icons/transparent/close-cross.svg","img/icons/transparent/non-secure.svg","img/icons/transparent/secure.svg","img/icons/video_message.svg","img/icons/videocall.svg","img/icons/voice_message.svg","img/icons_new/account_add_noback.svg","img/icons_new/add_noback_FILLED.svg","img/icons_new/attachment_noback.svg","img/icons_new/audio_message_noback.svg","img/icons_new/blogs_noback.svg","img/icons_new/calendar_noback.svg","img/icons_new/call_noback.svg","img/icons_new/call_noback_black.svg","img/icons_new/cloud_noback.svg","img/icons_new/comment_noback.svg","img/icons_new/contact_add_noback.svg","img/icons_new/contact_add_noback2.svg","img/icons_new/conversations.svg","img/icons_new/crowdfunding_noback.svg","img/icons_new/dating_noback.svg","img/icons_new/dislike_noback.svg","img/icons_new/donations_noback.svg","img/icons_new/emoji_noback.svg","img/icons_new/encryption_off_noback.svg","img/icons_new/encryption_on_noback.svg","img/icons_new/eshop_noback.svg","img/icons_new/event_noback.svg","img/icons_new/file_sharing_noback.svg","img/icons_new/forum_noback.svg","img/icons_new/forward_noback.svg","img/icons_new/games_noback.svg","img/icons_new/icon_accept_call.svg","img/icons_new/icon_accept_call_filled.svg","img/icons_new/icon_account.svg","img/icons_new/icon_account_filled.svg","img/icons_new/icon_add.svg","img/icons_new/icon_add_contact.svg","img/icons_new/icon_add_contact_filled.svg","img/icons_new/icon_add_filled.svg","img/icons_new/icon_administrators.svg","img/icons_new/icon_administrators_filled.svg","img/icons_new/icon_alias.svg","img/icons_new/icon_alias_filled.svg","img/icons_new/icon_attachment.svg","img/icons_new/icon_attachment_filled.svg","img/icons_new/icon_auction.svg","img/icons_new/icon_auction_filled.svg","img/icons_new/icon_blog.svg","img/icons_new/icon_blog_filled.svg","img/icons_new/icon_calendar.svg","img/icons_new/icon_calendar_filled.svg","img/icons_new/icon_call.svg","img/icons_new/icon_call_filled.svg","img/icons_new/icon_calls.svg","img/icons_new/icon_calls_filled.svg","img/icons_new/icon_camera_off.svg","img/icons_new/icon_camera_off_filled.svg","img/icons_new/icon_chatbot.svg","img/icons_new/icon_chatbot_filled.svg","img/icons_new/icon_cloud_storage.svg","img/icons_new/icon_cloud_storage_filled.svg","img/icons_new/icon_commets.svg","img/icons_new/icon_connected.svg","img/icons_new/icon_connected_filled.svg","img/icons_new/icon_contacts.svg","img/icons_new/icon_contacts_filled.svg","img/icons_new/icon_crowdfunding.svg","img/icons_new/icon_crowdfunding_filled.svg","img/icons_new/icon_crowdfunding_yellow_token.svg","img/icons_new/icon_crowfunding_yellow_token_filled.svg","img/icons_new/icon_dating.svg","img/icons_new/icon_dating_filled.svg","img/icons_new/icon_dislike.svg","img/icons_new/icon_dislike_filled.svg","img/icons_new/icon_domains.svg","img/icons_new/icon_domains_filled.svg","img/icons_new/icon_donations.svg","img/icons_new/icon_donations_filled.svg","img/icons_new/icon_e-shop.svg","img/icons_new/icon_e-shop_filled.svg","img/icons_new/icon_edit.svg","img/icons_new/icon_edit_filled.svg","img/icons_new/icon_emoji.svg","img/icons_new/icon_emoji_filled.svg","img/icons_new/icon_encryption.svg","img/icons_new/icon_encryption_filled.svg","img/icons_new/icon_event.svg","img/icons_new/icon_event_filled.svg","img/icons_new/icon_file.svg","img/icons_new/icon_file_filled.svg","img/icons_new/icon_file_image.svg","img/icons_new/icon_file_image_filled.svg","img/icons_new/icon_file_sharing.svg","img/icons_new/icon_file_sharing_filled.svg","img/icons_new/icon_file_video.svg","img/icons_new/icon_file_video_filled.svg","img/icons_new/icon_filter.svg","img/icons_new/icon_filter_filled.svg","img/icons_new/icon_folders.svg","img/icons_new/icon_folders_filled.svg","img/icons_new/icon_forum.svg","img/icons_new/icon_forum_filled.svg","img/icons_new/icon_forward.svg","img/icons_new/icon_forward_filled.svg","img/icons_new/icon_gambling.svg","img/icons_new/icon_gambling_filled.svg","img/icons_new/icon_games.svg","img/icons_new/icon_games_filled.svg","img/icons_new/icon_hardware.svg","img/icons_new/icon_hardware_filled.svg","img/icons_new/icon_help.svg","img/icons_new/icon_help_filled.svg","img/icons_new/icon_incoming_call.svg","img/icons_new/icon_incoming_call_filled.svg","img/icons_new/icon_infinity.svg","img/icons_new/icon_infinity_filled.svg","img/icons_new/icon_info.svg","img/icons_new/icon_info_filled.svg","img/icons_new/icon_language.svg","img/icons_new/icon_language_filled.svg","img/icons_new/icon_like.svg","img/icons_new/icon_like_filled.svg","img/icons_new/icon_live.svg","img/icons_new/icon_live_filled.svg","img/icons_new/icon_login.svg","img/icons_new/icon_login_filled.svg","img/icons_new/icon_logout.svg","img/icons_new/icon_logout_filled.svg","img/icons_new/icon_map_pin.svg","img/icons_new/icon_map_pin_filled.svg","img/icons_new/icon_marketplace.svg","img/icons_new/icon_marketplace_filled.svg","img/icons_new/icon_mediafeed.svg","img/icons_new/icon_mediafeed_filled.svg","img/icons_new/icon_message_template.svg","img/icons_new/icon_message_template_filled.svg","img/icons_new/icon_mic.svg","img/icons_new/icon_mic_filled.svg","img/icons_new/icon_mic_off.svg","img/icons_new/icon_mic_off_filled.svg","img/icons_new/icon_mute.svg","img/icons_new/icon_mute_filled.svg","img/icons_new/icon_nemp_v1.svg","img/icons_new/icon_nemp_v1_filled.svg","img/icons_new/icon_nemp_v2.svg","img/icons_new/icon_nemp_v2_filled.svg","img/icons_new/icon_nemp_v3.svg","img/icons_new/icon_nemp_v3_filled.svg","img/icons_new/icon_nemp_v4.svg","img/icons_new/icon_nemp_v4_filled.svg","img/icons_new/icon_nemp_v5.svg","img/icons_new/icon_nemp_v5_filled.svg","img/icons_new/icon_new_account.svg","img/icons_new/icon_new_account_filled.svg","img/icons_new/icon_new_chat.svg","img/icons_new/icon_new_chat_filled.svg","img/icons_new/icon_new_conversation.svg","img/icons_new/icon_new_conversation_filled.svg","img/icons_new/icon_newsfeed.svg","img/icons_new/icon_newsfeed_filled.svg","img/icons_new/icon_newsfeed_stroke.svg","img/icons_new/icon_no_connection.svg","img/icons_new/icon_no_connection_filled.svg","img/icons_new/icon_not_secure.svg","img/icons_new/icon_not_secure_filled.svg","img/icons_new/icon_notifications.svg","img/icons_new/icon_notifications_filled.svg","img/icons_new/icon_other.svg","img/icons_new/icon_other_filled.svg","img/icons_new/icon_outgoing_call.svg","img/icons_new/icon_outgoing_call_filled.svg","img/icons_new/icon_pause.svg","img/icons_new/icon_pause_filled.svg","img/icons_new/icon_payments.svg","img/icons_new/icon_payments_filled.svg","img/icons_new/icon_play.svg","img/icons_new/icon_play_filled.svg","img/icons_new/icon_qna.svg","img/icons_new/icon_qna_filled.svg","img/icons_new/icon_recieved.svg","img/icons_new/icon_reels.svg","img/icons_new/icon_reels_filled.svg","img/icons_new/icon_reject_call.svg","img/icons_new/icon_reject_call_filled.svg","img/icons_new/icon_remove-110.svg","img/icons_new/icon_remove-26.svg","img/icons_new/icon_remove_filled-111.svg","img/icons_new/icon_remove_filled-27.svg","img/icons_new/icon_reply.svg","img/icons_new/icon_reply_filled.svg","img/icons_new/icon_saved_messages.svg","img/icons_new/icon_saved_messages_filled.svg","img/icons_new/icon_screensharing.svg","img/icons_new/icon_screensharing_filled.svg","img/icons_new/icon_search.svg","img/icons_new/icon_search_filled.svg","img/icons_new/icon_secured.svg","img/icons_new/icon_secured_filled.svg","img/icons_new/icon_security.svg","img/icons_new/icon_security_filled.svg","img/icons_new/icon_send.svg","img/icons_new/icon_send_filled.svg","img/icons_new/icon_settings.svg","img/icons_new/icon_settings_filled.svg","img/icons_new/icon_sort_downwards.svg","img/icons_new/icon_sort_upwards.svg","img/icons_new/icon_sounds.svg","img/icons_new/icon_sounds_filled.svg","img/icons_new/icon_statistic.svg","img/icons_new/icon_statistic_filled.svg","img/icons_new/icon_sticker.svg","img/icons_new/icon_sticker_filled.svg","img/icons_new/icon_task.svg","img/icons_new/icon_task_filled.svg","img/icons_new/icon_theme.svg","img/icons_new/icon_theme_filled.svg","img/icons_new/icon_users.svg","img/icons_new/icon_users_filled.svg","img/icons_new/icon_video.svg","img/icons_new/icon_video_filled.svg","img/icons_new/icon_video_meeting.svg","img/icons_new/icon_video_meeting_filled.svg","img/icons_new/icon_video_message.svg","img/icons_new/icon_video_message_filled.svg","img/icons_new/icon_videocall.svg","img/icons_new/icon_videocall_filled.svg","img/icons_new/icon_voice_message.svg","img/icons_new/icon_voice_message_filled.svg","img/icons_new/icon_yellow_token.svg","img/icons_new/icon_yellow_token_donation.svg","img/icons_new/icon_yellow_token_donation_filled.svg","img/icons_new/icon_yellow_token_filled.svg","img/icons_new/language_noback.svg","img/icons_new/like_noback.svg","img/icons_new/map_noback.svg","img/icons_new/marketplace_noback.svg","img/icons_new/media_noback.svg","img/icons_new/micro_noback.svg","img/icons_new/newsfeed_noback_FILLED.svg","img/icons_new/other_noback.svg","img/icons_new/pause_noback,svg","img/icons_new/pause_noback.svg","img/icons_new/payments_noback.svg","img/icons_new/play_noback.svg","img/icons_new/search_noback.svg","img/icons_new/send_noback.svg","img/icons_new/tasks_noback.svg","img/icons_new/template_noback.svg","img/icons_new/video_message_noback.svg","img/icons_new/video_noback.svg","img/icons_new/videocall_noback.svg","img/icons_new/videocall_noback_black.svg","img/icons_new/videoconference_noback.svg","img/icons_new/views_noback.svg","js/functions.js","marker.png"]),
	mimeTypes: {".avif":"image/avif",".jpg":"image/jpeg",".json":"application/json",".jpeg":"image/jpeg",".png":"image/png",".zip":"application/zip",".gif":"image/gif",".mp4":"video/mp4",".ogg":"audio/ogg",".css":"text/css",".svg":"image/svg+xml",".ttf":"font/ttf",".html":"text/html",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.9684d054.js","app":"_app/immutable/entry/app.9e49f83c.js","imports":["_app/immutable/entry/start.9684d054.js","_app/immutable/chunks/index.ce530a3b.js","_app/immutable/chunks/singletons.49939934.js","_app/immutable/chunks/index.ba8b4f8d.js","_app/immutable/entry/app.9e49f83c.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.ce530a3b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
