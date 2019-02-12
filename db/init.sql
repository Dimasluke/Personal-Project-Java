drop table if exists champions;

create table champions (
    id serial primary key
    , name varchar(50)
    , img text
);

insert into champions ( name, img)
values
( 'Leona' , 'http://orig12.deviantart.net/e8de/f/2013/226/9/1/leona__the_radiant_dawn_by_23rdangel-d6i5i1o.jpg')
, ( 'Thresh', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg')
, ('Veigar', 'https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e8/Veigar_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203657');

select * from champions;