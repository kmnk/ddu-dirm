function! dirm#set_json_path(json_path) abort
  call denops#notify('dirm', 'setJsonPath', [a:json_path])
endfunction
