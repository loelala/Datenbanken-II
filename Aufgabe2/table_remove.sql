begin
  for rec in ( select table_name
               from   user_tables
               where  table_name like 'DMRS%'
             )
  loop
    execute immediate 'drop table '||rec.table_name;
  end loop;
end;