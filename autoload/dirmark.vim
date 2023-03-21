function! ddu#set_json_path(json_path) abort
  call denops#notify('dirmark', 'setJsonPath', a:json_path)
endfunction
