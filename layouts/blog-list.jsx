// import Link from "@/components/Link";
// import Tag from "@/components/Tag";
// import siteMetadata from "@/data/siteMetadata";
// import Pagination from "@/components/Pagination";
// import formatDate from "@/lib/utils/formatDate";

export default function BlogList({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}) {
  //   const [searchValue, setSearchValue] = useState("");
  //   const filteredBlogPosts = posts.filter((frontMatter) => {
  //     const searchContent =
  //       frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
  //     return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  //   });

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : initialDisplayPosts;

  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <ul>
          {/* {!filteredBlogPosts.length && "No posts found."} */}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li key={slug}>
                <article>
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd>
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div>
                    <div>
                      <h3>
                        {/* <Link href={`/blog/${slug}`}>{title}</Link> */}
                      </h3>
                      <div>
                        {/* {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))} */}
                      </div>
                    </div>
                    <div>{summary}</div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {/* {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )} */}
    </>
  );
}
